import React, { useState } from "react";
import TableUser from "../components/Table/TableUsers";
// Import Data Dummy Statis
import UsersData from "../utils/Data/Dummy/Users";
const Users = () => {
  const [users, setUsers] = useState(UsersData);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <TableUser UsersData={users} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
