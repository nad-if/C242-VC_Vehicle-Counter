const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supabase = require("../models/supabase");
const sendOTP = require("../services/EmailService");
const fileUpload = require("../services/UploadImageService");

const register = async (req, res, next) => {
  try {
    fileUpload(req, res, async (err) => {
      if (err) return next(err);

      const { fullname, email, password, role, phone, bio } = req.body;

      if (role !== "user" && role !== "admin") {
        return res.status(400).json({ error: "Role tidak valid" });
      }

      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (existingUser) {
        return res.status(400).json({ error: "Email sudah terdaftar" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const otp = Math.floor(100000 + Math.random() * 900000);
      const otpExpiry = new Date(Date.now() + 3 * 60 * 1000); // OTP berlaku 3 menit

      const imageUrl = req.file
        ? `/uploads/${req.file.filename}`
        : req.body.imageUrl || null;

      const { error } = await supabase.from("users").insert([
        {
          fullname,
          email,
          password: hashedPassword,
          role,
          phone,
          bio,
          otp,
          otpExpiry,
          imageUrl,
          isActive: false,
        },
      ]);

      if (error) return res.status(400).json({ error: error.message });

      await sendOTP(email, otp);
      res.status(200).json({ message: "OTP berhasil dikirim ke email" });
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { data, error: databaseError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (databaseError || !data || !data.isActive) {
      return res
        .status(400)
        .json({ error: "Invalid email or password, or account is not active" });
    }

    const isValid = await bcrypt.compare(password, data.password);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: data.id, role: data.role, email: data.email },
      process.env.JWT_SECRET,
      { expiresIn: "4m" }
    );

    await supabase.from("user_status").upsert({
      userId: data.id,
      status: "online",
      lastSeen: new Date().toISOString(),
    });

    res.status(200).json({ token, userId: data.id, role: data.role });
  } catch (error) {
    next(error);
  }
};

const verifyOTP = async (req, res) => {
  const { email, otp: otpInput } = req.body;

  const { data, error: databaseError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("otp", otpInput)
    .single();

  if (databaseError || !data) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  const otpExpiry = new Date(data.otpExpiry);

  if (new Date() > otpExpiry) {
    return res.status(400).json({ error: "OTP has expired" });
  }

  await supabase
    .from("users")
    .update({
      otp: null,
      otpExpiry: null,
      isActive: true,
    })
    .eq("email", email);

  res.status(200).json({ message: "Account activated" });
};

const logout = async (req, res, next) => {
  const { id: userId } = req.user;

  try {
    const { error } = await supabase
      .from("user_status")
      .delete()
      .eq("userId", userId);

    if (error) {
      return res.status(400).json({ error: "Failed to log out" });
    }

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, verifyOTP, login, logout };
