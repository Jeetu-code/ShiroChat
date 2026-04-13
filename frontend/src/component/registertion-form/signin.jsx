import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setgmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handlepassword() {
    if (!email || !password) {
      alert("please fill all details");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        localStorage.setItem("token", result.token);
        navigate("/chat");
      } else {
        alert(result.message || "login failed");
      }
    } catch (err) {
      console.log("Error", err);
      alert("server Error");
    }
  }

  return (
    <div className="mx-auto flex justify-center items-center h-screen w-full bg-gradient-to-b from-white to-slate-200">
      <div className="w-full max-w-md rounded-2xl h-110 mx-auto border border-gray-500">

        <h2 className="font-bold mt-2 text-3xl text-center">Sign in</h2>

        {/* Email */}
        <div className="mt-4">
          <div className="px-4">
            <input
              onChange={(e) => setgmail(e.target.value)}
              type="text"
              placeholder="john@example.com"
              className="shadow-md rounded-2xl mt-2 pl-5 py-4 w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <div className="px-5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="shadow-md rounded-2xl mt-2 pl-5 py-4 w-full outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlepassword}
            className="bg-[#0f172a] text-white w-80 py-3 rounded-xl active:scale-95"
          >
            Signin
          </button>
        </div>

      </div>
    </div>
  );
}