import React from "react";
import { motion} from "framer-motion";
import { ArrowLeft  , Phone} from "lucide-react";

export default function AddContect ({setshowaddcontact}){
    return (

    <div className=" absolute inset-0   w-full p-4  z-50 px-2 bg-white py-3 ">

{/*  back arrow */}
 <div className="flex gap-3 items-center ">
   <motion.div
  whileHover={{ x: -4, scale: 1.1 }}
  whileTap={{ scale: 0.9 }}>
  <ArrowLeft
    className="m-2 ml-1 cursor-pointer"
    onClick={() => setshowaddcontact(false)}
  />
</motion.div>
     <div className="text-lg ">New contact</div>
 </div> 



<div className=" flex mt-5  items-end gap-10">
     <div className="w-30">
<p className="px-5 py-2">country</p>

{/*  country */}
<div className="flex  px-3 items-center">
<Phone className="w-4 h-4 bg-gray-50 shrink-0"/>
<select className="border-b px-3 py-3  outline-none bg-transparent">
  <option value="+91"> IN +91</option>
  <option value="+1"> US +1</option>
  <option value="+44"> UK +44</option>
  <option value="+61">AU +61</option>
  <option value="+971">UAE +971</option>
</select>
    </div>
</div>

{/* phone */}
 <div className="mx-2">
<p>phone</p>
<motion.input
placeholder=" (555) 000-000"
className="border-b w-50  outline-none px-5 py-3 overflow-auto"
>
</motion.input>
    </div>
    </div>



{/* add button */}
<div className="flex justify-center w-full items-center ">
 <motion.button
 whileHover={{scale:1.05 , y:-2 }}
 whileTap={{scale:0.95}}
  className="   rounded-2xl mt-5 px-10 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
  >
    Add
    </motion.button>    
     </div>

    </div>
    )
}