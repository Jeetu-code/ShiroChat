  import React from "react";
  import { Search, Settings } from "lucide-react";
  import { motion } from "framer-motion";

  export default function Sidebar({ onSelectUser }) {

    const users = [
      {id:0 , name: "Ai chat", avatar:"https://i.pravatar.cc/150?img=5", isAI: true },
      { id: 1, name: "ravi", avatar: "https://i.pravatar.cc/150?img=1" },
      { id: 2, name: "jitender", avatar: "https://i.pravatar.cc/150?img=2" },
      { id: 3, name: "kumkum", avatar: "https://i.pravatar.cc/150?img=3" },
      { id: 4, name: "jyoti", avatar: "https://i.pravatar.cc/150?img=4" },
    ];

    return (
      <div className="w-100 h-screen bg-white/60">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 p-4">
          <h1 className="font-bold text-lg">Messages</h1>

          <div className="flex items-center gap-5">
            <Settings className="w-5 h-5" />
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>
        </div>

        {/* Users */}
        <div className="px-2 space-y-1">
          {users.map((user) => (
            <motion.div
              key={user.id}
              whileHover={{ x: 5 }}
              onClick={() => onSelectUser && onSelectUser(user)}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-slate-100"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium">{user.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    );
  }