import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/authSlice";
import { CiLogout } from "react-icons/ci";


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); 
  };

  return (
    <div className="flex items-end  p-2">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        <CiLogout />

      </button>
    </div>
  );
}

export default Logout;

