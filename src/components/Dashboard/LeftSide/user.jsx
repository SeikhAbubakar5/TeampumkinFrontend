import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import API_BASE_URL from "../../../utils/config";

function LeftSide({ setSelectedUser }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

 
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user?.token) {
        console.error("No token found, cannot fetch users");
        return;
      }

      try {
        const { data } = await axios.get(`${API_BASE_URL}/user/getAllUser`, {
          headers: {
            Authorization: `Bearer ${user.token}`, 
          },
        });
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user?.token]);

  return (
    <div className="h-screen border-r bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 mb-4 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     
      <div className="space-y-3">
        {users
          .filter((user) =>
            user.fullname.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div
              key={user._id}
              className="flex items-center gap-3 p-2 bg-white rounded-lg cursor-pointer hover:bg-blue-100"
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.avatar || "https://via.placeholder.com/50"}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{user.fullname}</h3>
                <p className="text-sm text-gray-500">{user.lastMessage || "No messages yet"}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LeftSide;
