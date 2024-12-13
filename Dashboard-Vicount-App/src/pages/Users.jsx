// import React, { useState, useEffect } from "react";
// import TableUser from "../components/Table/TableUsers";
// import ApiClient from "../api/apiClient";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const storedToken = localStorage.getItem("authToken");
//       if (!storedToken) {
//         console.error("No authentication token found");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await ApiClient.get("users/", {
//           headers: {
//             Authorization: `Bearer ${storedToken}`,
//           },
//         });
//         console.log("Fetched Users Data:", response.data); // Debug log
//         setUsers(response.data); // Assign data directly
//       } catch (error) {
//         console.error("Failed to fetch users", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p> // Loading state
//       ) : (
//         <TableUser UsersData={users} />
//       )}
//     </div>
//   );
// };

// export default Users;

import React, { useState, useEffect } from "react";
import TableUser from "../components/Table/TableUsers";
import ApiClient from "../api/apiClient";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk fetch data pengguna
  useEffect(() => {
    const fetchUsers = async () => {
      const storedToken = localStorage.getItem("authToken");
      if (!storedToken) {
        console.error("No authentication token found");
        setLoading(false);
        return;
      }
      try {
        const response = await ApiClient.get("users/", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        console.log("Fetched Users Data:", response.data); // Debug log
        setUsers(response.data); // Assign data directly
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Fungsi untuk menangani penghapusan pengguna
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      const storedToken = localStorage.getItem("authToken");
      if (!storedToken) {
        alert("No authentication token found");
        return;
      }

      try {
        const response = await ApiClient.delete(`users/${userId}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        if (response.status === 200) {
          alert("User deleted successfully");
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== userId)
          );
        }
      } catch (error) {
        alert(
          "Failed to delete user:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Loading state
      ) : (
        <TableUser UsersData={users} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Users;
