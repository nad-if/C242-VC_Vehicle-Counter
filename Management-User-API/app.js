require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const cron = require("node-cron");
const supabase = require("./models/supabase");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// Set inactive users offline
const scheduleInactiveUsersCheck = require("./middlewares/setInactiveUsersOffline");
scheduleInactiveUsersCheck();

// Error handling middleware
app.use(errorHandler);

// Real-time user status
const onlineUsers = new Map();

io.on("connection", (socket) => {
  socket.on("user-online", async (userId) => {
    onlineUsers.set(userId, socket.id);
    await supabase
      .from("user_status")
      .upsert({ userId, status: "online", updatedAt: new Date() });

    io.emit("users-status", [...onlineUsers.keys()]);
  });

  socket.on("disconnect", async () => {
    onlineUsers.forEach(async (value, key) => {
      if (value === socket.id) {
        onlineUsers.delete(key);
        await supabase
          .from("user_status")
          .update({ status: "offline", updatedAt: new Date() })
          .eq("userId", key);
      }
    });
    io.emit("users-status", [...onlineUsers.keys()]);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
