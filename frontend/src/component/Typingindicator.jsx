import React from "react";
import { motion } from "framer-motion";

export default function TypeIndicator(){
    return(
        <div className="">
            <motion.div 
            initial ={{opacity:0, y:40}} 
            animat= {{opacity:1 ,y:0}}
            exit ={{opacity:0 ,y:10}}
            className="flex items-end gap-2  py-2">

              <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl rounded-bl-md py-3 shadow-sm">
<div className="flex items-center gap-1.5">
    {[0,1,2].map((i)=>(
        <motion.div key={i} className=" h-2 rounded-full bg-slate-400"
        animate={{
  y: [0, -6, 0],      //  → niche → upar → niche
  opacity: [0.4, 1, 0.4],  // → light → full → light
}}
transition={{
    duration: 0.8,
    repeat: Infinity,
    delay: 1*0.15,
    ease :"easeinout"
}}
>
        </motion.div>
    ))}
</div>
                </div>

            </motion.div>
        </div>
    )
}