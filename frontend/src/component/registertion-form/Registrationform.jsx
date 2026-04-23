import React, { useState } from "react";
import Success from "./Success";

export default function Registrationform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, seterror] = useState("");
  const [Message, setMessage] = useState("");
  const [success, setsuccess] = useState(false);

  const mobile = parseInt(phone);

  async function onhandlePress(e) {
    e.preventDefault();

    let haserror = false;

    if (!name || !email || !phone || !password) {
      alert("fill all the details carefully");
      return;
    }

    if (phone.length !== 10) {
      seterror("phone number must be 10 digits");
      haserror = true;
    } else {
      seterror("");
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 digit ");
      haserror = true;
    } else if (password !== confirmpassword) {
      setMessage("Password not match");
      haserror = true;
    } else {
      setMessage("");
    }

    if (haserror) return;

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, mobile }),
      });

      const result = await response.json();
      console.log(result);
      setsuccess(true);
    } catch (err) {
      console.log("Error:", err);
      alert("server error");
    }
  }

  if (success) {
    return <Success setsuccess={setsuccess} />;
  }

  return(
<div className=" mx-auto flex justify-center items-center h-screen w-full  bg-gradient-to-b from-white to-slate-200 "> 
        <div className= "w-full bg-white/100   max-w-lg rounded-3xl  shadow-2xl   mx-auto  border   border-slate-100" >
  <span className="  flex justify-center mt-15 md:mt-10 items-center  mx-auto overflow-hidden rounded-full relative h-20 w-20 sm:h-24 sm:w-24 shadow-lg  ring-white/50 transition-all duration-300 hover:shadow-xl">
  <img
    className="aspect-square justify-center items-center mx-auto h-full w-full object-cover"
    alt="ChatSphere logo"
    src="https://media.base44.com/images/public/69c13deea29e8ab638e043ee/08030db4e_logo.png"
  />
</span>

      <h2 className="font-bold  mt-5 text-3xl p-1 m-1 ml-5 flex justify-center  ">Welcome to shirochat
         </h2>
               <h2 className="  font-bold mt-2  text-xl p-1 m-1 ml-5 flex justify-center text-gray-300  ">Sign up to continue
</h2>
        {/* Name */}
        <div className="mt-4 px-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl shadow outline-none"
          />
        </div>

        {/* Email */}
        <div className="mt-4 px-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="w-full p-3 rounded-xl shadow outline-none"
          />
        </div>

        {/* Phone */}
        <div className="mt-4 px-5">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
            className="w-full p-3 rounded-xl shadow outline-none"
          />
        </div>

        {/* Password */}
        <div className="flex gap-4 px-5 mt-4">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl shadow outline-none"
          />

          <input
            onChange={(e) => setconfirmpassword(e.target.value)}
            type="password"
            placeholder="Confirm"
            className="w-full p-3 rounded-xl shadow outline-none"
          />
        </div>

        {/* Errors */}
        <div className="text-center mt-2">
          {error && <p className="text-red-500">{error}</p>}
          {Message && <p className="text-red-500">{Message}</p>}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onhandlePress}
            className="bg-[#0f172a] text-white px-10 py-3 rounded-xl active:scale-95"
          >
            Create Account
          </button>
        </div>

        <div className="text-center mt-4 mb-4">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Sign in</span>
        </div>

      </div>
    </div>
  );
}