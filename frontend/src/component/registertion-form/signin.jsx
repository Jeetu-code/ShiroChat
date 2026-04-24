import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(){

  const[password , setpassword] = useState("");
  const[email , setgmail] = useState("")
 
  const navigate = useNavigate();
 
 const handlepassword =async()=>{

  try {
    const response = await fetch("https://shirochat.onrender.com/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, password })
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }


   if(!password || !email){
     alert("please fill all details")
     return ;
    }
    navigate("/chat")

  } 

    return (


<div className=" mx-auto bg-pink-50 flex justify-center items-center h-screen w-full  oklch(91% 0.096 180.426) "> 
        <div className= "w-full bg-white max-w-md rounded-2xl shadow-2xl h-110  mx-auto  " >
      <h2 className="font-bold  mt-2  text-3xl p-1 m-1 ml-5 flex justify-center  ">Sign in </h2>

<div className="mt-4">
<label className="ml-4 m-5 text-2xl">Email </label> <br />
<div className="px-4">
<input onChange={(r)=>setgmail(r.target.value)} type="text" name="" id="" placeholder="john@example.com" className=" border-black  shadow-md
  rounded-2xl mt-2 pl-5 py-4 w-full  " /> 
  </div>
  </div>

     
<div className="mt-4 "> 
<label className="ml-4 mt-4 text-2xl  pl-1">Password</label> <br />
<div className="px-5">
<input onChange={(e)=> setpassword(e.target.value)} type="password" name="" id="" placeholder="password" className=" border-black  shadow-md rounded-2xl mt-2 pl-5 py-4 w-full text-md " /> 
  </div>
</div>



 <div className="flex flex-row gap-2 mt-6 ">
  <input type="checkbox" className="size-6 rounded-2xl ml-4 border border-black" /> 
  <div className="md:flex md:flex-row  gap-1 md:gap-2 text-sm  flex ">
  i agree to the <p className="text-blue-400"> Tearm of service </p> and <p className="text-blue-400"> Privacy Policy</p> 
  </div>
 </div>  


 <div className="flex justify-center mt-6">
 <button onClick={()=> handlepassword()} className=" bg-sky-400  rounded-2xl  oklch(86.5% 0.127 207.078) w-80 md:w-100 justify-center  p-2  py-4 font-bold text-white  active:scale-95 transition  ">Signin</button>  
 </div>


</div>
            
        </div>
    )
}
