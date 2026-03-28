
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "./Success";
import { Phone } from "lucide-react";

export default function Registrationform (){

  const[name , setname] = useState("")
  const [email ,setemail] = useState("")
  const [password , setpassword] = useState("");
  const [confirmpassword , setconfirmpassword] = useState("");
  const[Message , setMessage] = useState("");
  const[number , setnumber] = useState("")
  const[error , seterror] = useState(false)


  // show create account message
  // const[showToast , setshowtoast] = useState("")


  const navigate = useNavigate();


const handlepassword = (e)=>{
e.preventDefault();    // preventDefault to use page is not reload 
let haserror = false;

if (!name || !email || !number || !password ) {
  alert("fill all the details carefully")
  return
}
  
  if(number.length !== 10){
seterror("phone number must be 10 digits");
haserror = true;
   }else{
    seterror("")    
   }
 //  Password validation
 if (password.length < 6) {
  setMessage("Password must be at least 6 digit ");
  haserror = true
 }
  
 else if(password !== confirmpassword) {
    setMessage("Password not match");
    haserror = true;
  }else{
    setMessage("")
  }

   // ✅ Success
 if (!haserror) {
   navigate("/Success");
  }
  
}



    return(
<div className=" mx-auto flex justify-center items-center h-screen w-full  oklch(91% 0.096 180.426) "> 
        <div className= "w-full max-w-md rounded-2xl   mx-auto  border   border-gray-500" >
      <h2 className="font-bold  mt-2  text-3xl p-1 m-1 ml-5 flex justify-center  ">Sign Up </h2>
     

<div className="mt-4 ">
<label className="ml-4 mt-4 text-2xl  pl-1">Full name</label> <br />
<div className="px-5">
<input onChange={(e)=>{setname(e.target.value)}} type="text" name="" id="" placeholder="jhon Doe" className=" border-black  shadow-md rounded-2xl mt-2 pl-5 py-4 w-full text-md " /> 
  </div>
</div>

<div className="mt-4">
<label className="ml-4 m-5 text-2xl">Email Address</label> <br />
<div className="px-4">
<input onChange={(e)=>{setemail(e.target.value)}} type="text" name="" id="" placeholder="john@example.com" className=" border-black  shadow-md
  rounded-2xl mt-2 pl-5 py-4 w-full  " /> 
  </div>
  </div>

<div className="mt-4">
<label className="ml-4 mt-4 text-2xl">Phone Number</label> 
<div className="px-5">
<input  type="text" name="" id="" placeholder="+91 (555) 000-000" onChange={(e)=> setnumber(e.target.value)} className=" border-black shadow-md rounded-2xl mt-2 pl-5 py-4 w-full " />
  </div>
  </div>


 <div className="flex  gap-10 md:gap-0 md:justify-between flex-row  mb-1 mt-5 ">
    <div className="">
<label className="ml-4 mt-4 text-2xl">Password</label> <br />
<input type="password" name="" id="" placeholder="password" onChange={(e)=>setpassword(e.target.value)} className="  border-black  shadow-md rounded-2xl m-2  p-2 md:p-3 w-35 md:w-50  "  />
  </div>

<div>
<label className="ml-4 mt-4 text-2xl">confirm</label> <br />
<input type="password" name="" id="" placeholder="confirm" onChange={(e)=>setconfirmpassword(e.target.value)} className=" shadow-md border-black  rounded-2xl m-2 p-2 md:p-3 w-35 md:w-50 " />
  </div>
  </div> 

 <div className="flex flex-row gap-2 mt-2 ">
  <input type="checkbox" className="size-6 rounded-2xl ml-4 border border-black" /> 
  <div className="md:flex md:flex-row  gap-1 md:gap-2 text-sm  flex ">
  i agree to the <p className="text-blue-400"> Tearm of service </p> and <p className="text-blue-400"> Privacy Policy</p> 
  </div>
 </div>  
 

 <div className="flex justify-center mt-6">
 <button onClick={handlepassword}  className=" bg-sky-400 border border-black rounded-2xl  oklch(86.5% 0.127 207.078) w-80 md:w-100 justify-center  p-2  py-4 font-bold text-white  active:scale-95 transition  ">Create Account</button>  
 </div>

 {/* type message */}
 <div className="flex flex-col ">
<div className="flex justify-center mt-4">
  {error && <p className="text-red-500">{error}</p>}
</div>
<div className="flex justify-center">
  {Message && <p className="text-red-500">{Message}</p>}
</div>
 </div>

<div className="flex flex-row justify-center  mt-8 ">
 <p>Already have an account?</p> <p className="text-blue-400  cursor-pointer ">sign in</p>
</div>

        </div>
        </div>
    )

}
