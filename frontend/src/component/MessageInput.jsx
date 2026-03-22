import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, Paperclip, Send, Smile } from "lucide-react";

export default function MessageInput({onsend}){
    const[text ,setText] = useState(""); // it use to write text in input box
    const[isFocused ,setisFoucused] = useState(false); // check click input or not 

    const handlesumbit = (e) =>{
            e.preventDefault(); // it is build funtion help to not reload page again
            if(!text.trim()) // trim is build function help to protect empty or null message to go away jane se rokta h khali value ko
                return;
                onsend(text.trim()) // use to send meaasge in chatwindow parent 
                setText(""); // empty the input box
    }
    return(
        <div className="rounded-2xl flex mt-0 ">
        <motion.form onSubmit={handlesumbit} className="flex items-center gap-2 pb-5 w-full rounded-2xl"
        //  {/* use to from for apply animation and send message */}
        animate={{
            boxShadow: isFocused ? "0 0 0 2px rgba(139, 92, 246, 0.3), 0 4px 20px rgba(0,0,0,0.06)"
            : "0 1px 8px rgba(0,0,0,0.04)",
        }}>

        <motion.button type="button" className="pl-4">
            <Paperclip className="size-lg"/>
        </motion.button>{/*  */}

        <input 
        className=" w-full py-4 rounded-2xl text-2xl px-3 focus:outline-none  mx-4 border-none focus:ring-0"
        placeholder="Type a message"
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        onFocus={()=>{setisFoucused(true)}} 
        onBlur={()=>{setisFoucused(false)}}/>

        
        <motion.button
          type="button"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-slate-400 hover:text-amber-500 transition-colors rounded-xl hover:bg-amber-50/60 pr-5 "
        >
          <Smile className="size-lg  " />   
          {/* // emoji picker */}
        </motion.button>
 <AnimatePresence>
          {text.trim() ? (
            <motion.button type="submit" className="mr-6 size-lg">
              <Send />
            </motion.button>
          ) : (
            <motion.button type="button" className="pr-6">
              <Mic />
            </motion.button>
          )}
  </AnimatePresence>
        </motion.form> 

        </div>

    )
};