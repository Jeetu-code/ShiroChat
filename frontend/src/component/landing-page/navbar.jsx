import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

 export default function Navbar(){ 

const navigate = useNavigate();
    return(  

        // nav bar 
    <div className="flex w-full justify-center">

<div className="flex items-center justify-between gap-3  w-350 h-20   bg-white/70 p-2 rounded-2xl mt-10 ">

    <div className="flex flex-row gap-3 justify-center  items-center"> 

    <div className="flex text-violet-600  bg-violet-300 rounded-2xl py-3 px-3 items-center justify-center" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg></div>
    <div className="font-bold text-2xl ">ShiroChat</div>

    </div>

<motion.button 
whileHover={{scale:1.04}}
whileTap={{ scale: 0.97 }}
onClick={()=>navigate("/login")}
className="border border-blue-300 text-violet-900 rounded-2xl transition-colors bg-violet-100 px-6  py-3 m-1 font-medium text-md">
Login 
</motion.button>


</div>
</div>

    )
}