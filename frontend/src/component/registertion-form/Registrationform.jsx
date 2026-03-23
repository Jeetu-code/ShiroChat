
import React from "react";
export default function Registrationform (){

    return(
<div className=" mx-auto flex justify-center items-center h-screen w-full  oklch(91% 0.096 180.426) "> 
        <div className= "w-full max-w-md rounded-2xl   mx-auto  border   border-gray-500" >
      <h2 className="font-bold  mt-2  text-3xl p-1 m-1 ml-5 flex justify-center  ">Sign Up </h2>
     

<div className="mt-4 ">
<label className="ml-4 mt-4 text-2xl  pl-1">Full name</label> <br />
<div className="px-5">
<input type="text" name="" id="" placeholder="jhon Doe" className=" border-black  shadow-md rounded-2xl mt-2 pl-5 py-4 w-full text-md " /> 
  </div>
</div>

<div className="mt-4">
<label className="ml-4 m-5 text-2xl">Email Address</label> <br />
<div className="px-4">
<input type="text" name="" id="" placeholder="john@example.com" className=" border-black  shadow-md
  rounded-2xl mt-2 pl-5 py-4 w-full  " /> 
  </div>
  </div>

<div className="mt-4">
<label className="ml-4 mt-4 text-2xl">Phone Number</label> 
<div className="px-5">
<input type="text" name="" id="" placeholder="+91 (555) 000-000" className=" border-black shadow-md rounded-2xl mt-2 pl-5 py-4 w-full " />
  </div>
  </div>


 <div className="flex  gap-10 md:gap-0 md:justify-between flex-row  mb-1 mt-5 ">
    <div className="">
<label className="ml-4 mt-4 text-2xl">Password</label> <br />
<input type="password" name="" id="" placeholder="password" className="  border-black  shadow-md rounded-2xl m-2  p-2 md:p-3 w-35 md:w-50 " />
  </div>

<div>
<label className="ml-4 mt-4 text-2xl">confirm</label> <br />
<input type="password" name="" id="" placeholder="confirm" className=" shadow-md border-black  rounded-2xl m-2 p-2 md:p-3 w-35 md:w-50 " />
  </div>
  </div> 

 <div className="flex flex-row gap-2 mt-2 ">
  <input type="checkbox" className="size-6 rounded-2xl ml-4 border border-black" /> 
  <div className="md:flex md:flex-row  gap-1 md:gap-2 text-sm  flex ">
  i agree to the <p className="text-blue-400"> Tearm of service </p> and <p className="text-blue-400"> Privacy Policy</p> 
  </div>
 </div>  
 
 <div className="flex justify-center mt-6">
 <button className=" bg-sky-400 border border-black rounded-2xl  oklch(86.5% 0.127 207.078) w-80 md:w-100 justify-center  p-2  py-4 font-bold text-white   ">Create Account</button>  
 </div>

<div className="flex flex-row justify-center  mt-10 ">
 <p>Already have an account?</p> <p className="text-blue-400 ">sign in</p>
</div>

        </div>
        </div>
    )

}
