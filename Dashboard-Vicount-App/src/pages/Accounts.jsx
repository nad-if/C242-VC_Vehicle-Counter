import React from "react";
import CardProfile from "../components/Card/CardProfile";
import ApiClient from "../api/apiClient";
import { useState, useEffect } from "react";
const Account = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const storedToken = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("user");
      if (!storedToken) {
        return;
      }
      try {
        const response = await ApiClient.get(`users/${storedUser}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setUsers([response.data]);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  })
  return (
    <>
      <CardProfile  userProfile={users}/>
    </>
  );
};

export default Account;
