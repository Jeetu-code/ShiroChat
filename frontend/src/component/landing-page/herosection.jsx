import React from "react";
import { color, motion } from "framer-motion";
import { Sparkles , ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Herosection(){
const navigate = useNavigate()
    return(
        <div className=" ">       
<div className="inline-flex flex-row gap-2 border border-blue-300 px-3 py-2 bg-blue-100 font-bold p-2  rounded-2xl mt-10 text-purple-800 "> 
   <Sparkles /> Real time messaging,reimagiend
</div>



<div className="flex flex-col gap-4">
<motion.h1 
initial = {{opacity:0, y:30}}
animate = {{opacity: 1, y:0}}
transition={{duration :0.7 , delay :0.5}}
className="text-8xl font-bold flex flex-col  lg:justify-start ">
  
  <span>Connect </span>
  <span>  instantly  </span> 
    
  <span className="bg-gradient-to-r from-purple-700 via-pink-400 to-indigo-500 bg-clip-text text-transparent   "> With anyone</span>  
</motion.h1>

<motion.p
initial={{opacity:0 , y:30}}
animate={{opacity:1, y:0}}
transition={{duration:0.7 , delay: 0.35}}
className="mt-6 max-w-md font-inter text-base text-gray-600 sm:text-lg leading-relaxed ">
    Lightning-fast messaging with end-to-end
     encryption. Beautiful, simple, and built for the way 
     you communicate.
</motion.p>


<div className="flex flex-row gap-10">


<motion.button
  whileHover={{ scale: 1 }}
  whileTap={{ scale: 0.95, rotate: 0.1, opacity: 0.9 }}
  onClick={()=>navigate("/chat")}
  className="bg-purple-400 rounded-2xl w-60 px-6 py-4 text-white font-semibold text-lg"
>
    <span  className="flex flex-row font-bold items-center gap-1">Get Started Free <ArrowRight/> </span>
  
</motion.button>



<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95, rotate: 0.5, opacity: 0.9 }}
   onClick={()=>navigate("/signin")}
  className="bg-white/70 rounded-2xl w-40 px-3 py-4 text-black font-bold font-semibold text-lg"
>
  sign in
</motion.button>
    </div>

<div className="flex items-center  mt-5  ">
{[
   {color: "#8B5CF6",label:"A"} ,
   {color: "#EC4899", label: "b"},
   {color: "#6366F1", label:"C"},
   {color:"#F59E0B", label :"D"}
].map((item , i)=>(
<div
className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white font-bold text-white shadow-sm ${i!==0 ? "-ml-2" : ""}`}
style={{backgroundColor : item.color}} // this method have been use when you have already dynamic color
 key={i}> 
{item.label}    
</div>
))}

<div className="flex font-bold pl-8 "> 2,400+ <p className="text-gray-700">people chatting now</p></div>

</div>


    </div>
        </div>
    )
} 