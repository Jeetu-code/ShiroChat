import React, { use } from "react";
import { CircleCheck } from "lucide-react";
import { motion, spring } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Success(){
    

    const navigate = useNavigate()

    return (
        <div className="  inset-0 bg-gray-900/40 backdrop-blur-md z-40 absolute flex w-full min-h-screen rounded-2xl overflow-hidden  justify-center items-center  ">
            <div className="rounded-2xl flex  overflow-hidden flex-col shadow-md  w-100 h-120">
                <div className="flex h-60 flex-col  bg-sky-400 justify-center items-center">
         < CircleCheck className="w-16 h-16 text-white font-bold"/>
         <p className="font-bold text-2xl text-white bg-sky-400">Success</p>
                </div>
                <div className="flex flex-col h-60 justify-center text-2xl bg-white text-gray-400  items-center">
                <p className="m-2 p-4 font-bold">Coungratulations, your acount
                     has been succesfully created. </p>
            <motion.button 
             whileHover={{scale: 1.05}}
             whileTap={{scale:0.95}}
            onClick={()=>navigate("/signin")}
            className="rounded-2xl p-4 m-3 text-white font-bold bg-sky-400">Continue
            </motion.button>
                </div>
            </div>
        </div>
    )
}
