import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { SiChatwoot } from "react-icons/si";
import API_BASE_URL from "../../utils/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/user/login`, { email, password });
      toast.success("Login successful");
      dispatch(loginSuccess(response.data));
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="border px-6 py-4 rounded-md space-y-3 w-96">
        <div className=" flex justify-center">
          <h1 className="text-2xl font-bold text-blue-600"><SiChatwoot className="mt-1 text-blue-600 " /></h1>
          <h2 className="text-lg ml-1">Chat </h2>
        </div>

        <input
          type="email"
          className="input input-bordered w-full p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="input input-bordered w-full p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500 underline">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
