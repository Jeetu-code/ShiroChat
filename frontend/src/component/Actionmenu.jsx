import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft ,Search ,Grid3X3 , Users , UserPlus , UserRound} from "lucide-react";
import { motion  } from "framer-motion";

export default function Actionmenu({setopenmenu}){
    // const  navigator = useNavigate()

    const users = [
        {id: 1 , name: "create group" , profile: <Users className="h-5 w-5 text-white"/>},
        {id: 2 , name: "new contect", profile: <UserPlus className="h-5 w-5 text-white" />},
        {id:3 , name: "ravi ", profile: <UserRound className="  "/>},
        {id:4 , name:"jitender" , profile:<UserRound/>},
        {id:5 , name:"jyoti" , profile:<UserRound/>},
        {id:6 , name:"kumkum" , profile:<UserRound/>},

    ];

    return(
        <div className=" absolute inset-0 h-screen w-full z-50 bg-white">
     <div className=" flex  flex-row justify-between mt-4 px-4">
        <ArrowLeft onClick={()=>setopenmenu(false)}/>
        <div>
            New chat    
        </div>
        <Grid3X3 />
     </div>

<div className="mx-3">
<div className=" flex flex-row w-full mt-5 px-4 rounded-3xl bg-amber-100 py-3 "> 
    <Search/>
     <input type="text"  name="" id=""  placeholder= "  search name and number" className=""/>
</div>
</div>


<div className="px-2 space-y-1 mt-10">
    {users.map((user)=>(
<motion.div 
  whileHover={{ x: 5 }}
key={user.id}
className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-slate-100" >
    <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center ">
{user.profile } 
    </div>
<span className=" font-medium text-lg ">{user.name}</span>
</motion.div>
    ))}
</div>


        </div>
    )
}