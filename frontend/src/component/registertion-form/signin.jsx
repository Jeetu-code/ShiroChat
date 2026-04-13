import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function Signin() {
  const [email, setgmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword , setshowpassword] = useState(false)

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
    <div className="mx-auto flex justify-center items-center h-screen w-full bg-gradient-to-b from-sky-700 via-blue-100  to-slate-50">
      <div className="w-full max-w-md rounded-2xl h-120 mx-auto border border-transparent bg-gradient-to-b from-sky-200 to-white/90">
        <div className="flex justify-center mt-5">
 <div className="flex  bg-white rounded-2xl w-20 h-20  justify-center text-center items-center"><  PiSignInBold size={40} /></div>   </div>
        <h2 className="font-bold mt-2 text-3xl text-center">Sign in
           <span className="block w-16 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></span>
        </h2>

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
          <div className=" relative px-5">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              className="shadow-md rounded-2xl mt-2 pl-5 py-4 w-full outline-none"
            />
{/* // eye */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer"
onClick={()=>setshowpassword(!showpassword)}>
{showpassword? (<AiOutlineEye size={30}/>):
(<AiOutlineEyeInvisible size={30}/>)}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlepassword}
            className="bg-[#0f172a] font-bold text-white w-80 py-3 rounded-xl active:scale-95"
          >
            Get started
          </button>
        </div>
        
        <p className="text-center mt-4">
  Don’t have an account? 
  <span className="text-blue-400 cursor-pointer"> Sign up</span>
</p>

      </div>
    </div>
  );
}