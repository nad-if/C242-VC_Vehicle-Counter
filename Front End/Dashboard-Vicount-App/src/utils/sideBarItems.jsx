import { PieChart, Users, User, Settings } from "lucide-react";

const sideBarItems = [
  { title: "Overview", icon: <PieChart size={20} />, href: "/" },
  { title: "Users", icon: <Users size={20} />, href: "/users" },
  { title: "Accounts", icon: <User size={20} />, href: "/profile" },
  { title: "Settings", icon: <Settings size={20} />, href: "/settings" },
];

export default sideBarItems;