import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { SiChatwoot } from "react-icons/si";
import API_BASE_URL from "../../utils/config";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !phone || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/user/register`, {
        fullname,
        email,
        phone,
        password,
      });
      toast.success("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border px-6 py-4 rounded-md space-y-3 w-96"
      >
        <div className="flex items-center">
          <SiChatwoot className="text-2xl text-blue-600" />
          <h2 className="text-lg ml-2">Chat</h2>
        </div>

        <input
          type="text"
          className="input input-bordered w-full p-2"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <input
          type="email"
          className="input input-bordered w-full p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          className="input input-bordered w-full p-2"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          className="input input-bordered w-full p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Signup
        </button>

        <p className="text-center">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
