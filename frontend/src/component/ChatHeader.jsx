    import React from "react"
    import { motion } from "framer-motion"
    import { Phone, Video, MoreVertical, ChevronLeft } from "lucide-react"  // for icons 

    const statusColors = {
    online: "bg-emerald-400", // green
    away: "bg-amber-400",  // yellow
    offline: "bg-slate-300",       // gray  // for display  dot color mode of online and ofline
    }

    const statusLabels = {
    online: "Active now",
    away: "Away",                   // user for show text
    offline: "Offline",
    }

    export default function ChatHeader({user ,onBack}){
    if(!user) return null        // of user not found render will not occur
    return (
        <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}                                          // opacity 0 → 1 use to smmoth slide down
    className="flex items-center w-full  justify-between px-4 py-3 bg-white border-b"
    >

    <div className="flex items-center gap-3 ">

    <motion.button
    whileHover={{ scale: 1.1 }}        // hover = button zoom 
    whileTap={{ scale: 0.9 }}
    onClick={onBack}             // click - button shink 
    className="p-2 rounded-lg hover:bg-slate-100"
    >
    <ChevronLeft className="w-5 h-5" />
    </motion.button>
    <div className="relative">

    <img
src={user.avatar}
        alt={user.name}
    className="w-10 h-10 rounded-full object-cover"
    />

    <div
    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${statusColors[user.status] || "bg-slate-300"}`}
    />

    </div>

    <div> 

        <h2 className="text-sm font-semibold">
    {user.name}
    </h2>

   <span className="text-xs text-slate-500">
  {user.isAI
    ? "AI Assistant "
    : statusLabels[user.status] || "Offline"}
</span>
    </div>

    </div>

    <div className="flex items-center gap-2">

    {[Phone, Video, MoreVertical].map((Icon, i) => (
        
        <motion.button
        key={i}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg hover:bg-slate-100"
        >
        <Icon className="w-5 h-5" />
        </motion.button>

    ))}

    </div>

    </motion.div>



    )

    }
