import React from "react";
import { Routes, Route } from "react-router-dom";

// Components Page
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Overview from "../Overview";
import Users from "../Users";
import Accounts from "../Accounts";
import Settings from "../Settings";
import ErrorPage from "../404";
import EditAccounts from "../EditAcounts";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-hidden flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Accounts />} />
            <Route path="/EditAccount/:id" element={<EditAccounts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
