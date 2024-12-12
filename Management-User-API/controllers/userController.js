const supabase = require("../models/supabase");

const getUserProfile = async (req, res) => {
  const { id } = req.params;
  const { data: user, error: getUserError } = await supabase
    .from("users")
    .select("id, fullname, email, role, phone, bio, imageUrl")
    .eq("id", id)
    .single();

  if (getUserError) {
    return res.status(400).json({ error: getUserError.message });
  }

  res.status(200).json(user);
};

const getAllUsers = async (req, res) => {
  try {
    // Fetch all users
    const { data: users, error: usersError } = await supabase
      .from("users")
      .select("id, fullname, email, role, imageUrl, createdAt");

    if (usersError) throw usersError;

    // Fetch latest status for all users
    const { data: statuses, error: statusesError } = await supabase
      .from("user_status")
      .select("userId, status")
      .in(
        "userId",
        users.map((user) => user.id)
      );

    if (statusesError) throw statusesError;

    // Merge user data with status
    const usersWithStatus = users.map((user) => ({
      ...user,
      status:
        statuses.find((status) => status.userId === user.id)?.status ||
        "offline",
    }));

    res.status(200).json(usersWithStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  // Memeriksa izin pengguna
  if (req.user.role !== "admin" && req.user.id !== parseInt(id)) {
    return res.status(403).json({ error: "Unauthorized to update this user" });
  }

  // Validasi kolom yang diperbolehkan
  const allowedUpdates = ["fullname", "phone", "email", "bio"];
  Object.keys(updates).forEach((key) => {
    if (!allowedUpdates.includes(key)) {
      delete updates[key];
    }
  });


  // Melakukan pembaruan
  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("id", id);

  // Debugging hasil

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  if (!data || data.length === 0) {
    return res
      .status(404)
      .json({ message: "No user found or no changes made." });
  }

  res
    .status(200)
    .json({ message: "User updated successfully", updatedData: data });
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  const { role: userRole } = req.user;

  if (userRole !== "admin") {
    return res.status(403).send({ error: "Unauthorized to delete users" });
  }

  const { error } = await supabase.from("users").delete().eq("id", userId);

  if (error) {
    return res.status(400).send({ error: error.message });
  }

  res.send({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserProfile,
  updateUser,
  deleteUser,
};
