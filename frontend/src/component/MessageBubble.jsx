import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MessageBubble({message}){
   
    const isSent = message.sender === "me"   //  अगर message मैंने भेजा → right side
                                          //    अगर दूसरे ने भेजा → left side
    return (
        
            <motion.div 
            initial={{opacity:0 , y:16 , scale: 0.95}}
            animate={{opacity:1 ,y:0 ,scale:1}}
            className= {`flex ${isSent ? "justify-end" : "justify-start"} px-4 `}> 

<motion.div className={`max-w-[70%] px-4 py-2.5 relative group ${isSent ? 
    "bg-linear-to-br from-violet-500 to-indigo-500 text-white rounded-2xl rounded-br-md shadow-lg shadow-violet-500/20" : "bg-white/80 backdrop-blur-sm text-slate-800 rounded-2xl rounded-bl-md border border-slate-200/60 shadow-sm"
}`}>  
 {/* it use ternery operator when message sent and recive it change the font  */}

 <p className="text-sm">{message.text}</p>
<div className={`flex justify-end  text-[10px] gap-1 mt-1 ${isSent ? "text-white/60" : "text-slate-400"}`}>
  {message.time}
  {isSent && (
     <Check className="w-3 h-3 text-white/60"/>
    )}
</div>
 
</motion.div>

            </motion.div>
    
    )
}
