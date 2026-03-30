import React from "react";
import { easeInOut, easeOut, motion, scale } from "framer-motion";
import { CheckCheck } from "lucide-react";


const message = [
    {id:"1", text:"Hey! are you coming to night" , sender:"other", time:"9:40 PM", name:"suresh"},
    {id:"2", text:"Absolutely can't wait" , sender:"self", time:"9:41 PM", },
    {id:"3", text:"Perfect see you their!" , sender:"other", time:"9:41 PM", name:"suresh"},
    {id:"4", text:"Bringing snacks too" , sender:"self", time:"9:42 PM", }
]


function MessageBubblePreview({msg,index}){
    const isSelf =  msg.sender === "self";
    return (
     <motion.div 
     initial={{opacity:0, y:20 , scale: 0.9}}    
     animate={{opacity:1, y:1, scale: 1 }}
     transition={{duration: 0.45 , delay: 0.8 + index * 0.2 , ease: easeOut }}
     className={`flex ${ isSelf ? 'justify-end': "justify-start"}`}>

<div className={`max-w-[75%] mt-5 ml-5 mr-5 px-3 py-2 ${isSelf ? " shadow-md  text-white rounded-2xl bg-indigo-500":  " shadow-md bg-white rounded-2xl border border-gray-200 text-black "  }` }>

{!isSelf && <p className="text-indigo-800 font-bold">{msg.name}</p> } 
<p>{msg.text}</p>

<div className="flex justify-end items-center overflow-hidden ">

<span className="">{msg.time}</span>
  {isSelf && <CheckCheck className="h-3.5 w-3.5 text-white/70" />}
</div>
</div>  

        </motion.div>
    )
     
}



export default function Chatpreview(){

    return(
 
<div className="mx-auto w-full max-w-md h-[566px] shadow-2xl border border-gray-100 rounded-2xl overflow-hidden bg-white/40">

<div className="flex flex-row h-20     w-full gap-8  bg-gray-100  ">

<div className="flex flex-row flex-1 mt-2 gap-4 ml-2">
<div className=" flex overflow-hidden rounded-full w-12 h-12 font-bold  bg-purple-200 text-center items-center justify-center mt-2 ml-3 text-xl "> s</div> 

    
<div className="flex flex-col font-bold mt-2">
<p>Saresh Miller</p>  
<p className="text-md text-green-500">online</p>
</div>
</div>

<div className="flex gap-2 mr-7 mt-8">
{["bg-red-400", "bg-yellow-400", " bg-green-400"].map((e,i)=>(
    <div key={i}  className={`h-3 w-3 rounded-full  ${e}`}/> 
))}
</div>


</div>

{/* message */}
     <div className="bg-gradient-to-b from-secondary/30 to-white/50">
        {message.map((msg,index)=>(
            <MessageBubblePreview key={msg.id} msg={msg} index={index}/> 
        ))}
    </div> 

    <div className="h-20 bg-pink-100 mt-4 rounded-2xl shadow-2xl px-3 overflow-hidden">
        <div className=" relative  w-full  ">
            <input type="text"   placeholder="Type a message..." className="bg-orange-50 h-10 w-full py-7  rounded-2xl   mt-2 outline-none overflow-hidden " />

<motion.div
animate={{scale:[1,1.5,1]}}
transition={{duration:2 , repeat: Infinity , ease : "easeInOut"}}
 className="flex absolute right-4 h-8 w-8 items-center justify-center rounded-full bg-indigo-500 top-1/2 -translate-y-1/2 cursor-pointer mt-1">
             <svg className="flex h-4   justify-center items-center w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
</motion.div>
        </div>
    </div>

</div>

    )
}