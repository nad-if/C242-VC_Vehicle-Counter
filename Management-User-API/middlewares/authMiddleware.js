const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError" && req.user?.id) {
      await supabase
        .from("user_status")
        .update({ status: "offline", updatedAt: new Date() })
        .eq("userId", req.user.id);
    }

    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Unauthorized access" });
    }
    next();
  };
};

module.exports = { authenticate, checkRole };
