const cron = require("node-cron");
const supabase = require("../models/supabase");

const scheduleInactiveUsersCheck = () => {
  cron.schedule("*/4 * * * *", async () => {
    const currentTime = new Date();
    const { data: userStatuses, error: userStatusError } = await supabase
      .from("user_status")
      .select("userId, updatedAt");

    if (userStatusError) {
      console.error("Error fetching user status:", userStatusError.message);
      return;
    }

    userStatuses.forEach(async (userStatus) => {
      const lastSeen = new Date(userStatus.updatedAt);
      const timeDifferenceInMinutes = (currentTime - lastSeen) / (1000 * 60);

      if (timeDifferenceInMinutes >= 4) {
        await supabase
          .from("user_status")
          .delete()
          .eq("userId", userStatus.userId);
      }
    });
  });
};


module.exports = scheduleInactiveUsersCheck;
