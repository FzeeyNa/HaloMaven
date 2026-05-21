"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Code, Monitor, Smartphone, Database, 
  Globe, Cloud, Bot, Blocks, Cpu, 
  Shield, Wifi, Server, Braces, Binary 
} from "lucide-react";

const icons = [
  Terminal, Code, Monitor, Smartphone, Database, 
  Globe, Cloud, Bot, Blocks, Cpu, 
  Shield, Wifi, Server, Braces, Binary
];

const extendedIcons = [...icons, ...icons, ...icons, ...icons]; // 60 items for full width

function PixelSnakeGrid() {
  const baseGrid = [
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,1,0,0,0,1,0,0],
    [0,0,0,1,0,0,0,1,0,0,1,1,0,0],
    [0,0,0,0,0,0,1,1,0,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,1,0,0,0,0],
  ];

  const grid = baseGrid.map(row => [
    ...row, ...row, ...row, ...row, 
    ...row, ...row, ...row, ...row
  ]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.25] pointer-events-none z-0 transform-origin-center min-w-max">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {grid.map((row, r) => (
          <div key={r} className="flex gap-2 sm:gap-4 md:gap-6">
            {row.map((cell, c) => (
              <motion.div 
                key={`${r}-${c}`} 
                animate={{ y: cell ? [-3, 3, -3] : 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: (r+c)*0.2 }}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${cell ? 'bg-gray-200 border-[0.5px] border-gray-300 shadow-[2px_2px_0px_0px_rgba(200,200,200,1)]' : 'bg-transparent'}`} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechArc() {
  return (
    <div className="w-full overflow-hidden flex justify-center pt-20 pb-20 relative">
      <PixelSnakeGrid />
      
      <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-w-max px-4 relative z-10">
        {extendedIcons.map((Icon, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
            >
              <motion.div
                animate={{ y: [0, -40, 0] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: -i * 0.12 
                }}
                whileHover={{ scale: 1.15 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white border-2 border-gray-200 rounded-sm shadow-[4px_4px_0px_0px_rgba(230,230,230,1)] hover:shadow-[6px_6px_0px_0px_rgba(124,58,237,0.3)] hover:border-violet-300 flex justify-center items-center text-gray-400 hover:text-violet-600 transition-all cursor-pointer"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
