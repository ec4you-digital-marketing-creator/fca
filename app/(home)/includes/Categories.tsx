"use client";

import React from "react";
import { 
  Battery, 
  Settings2 as Brake, 
  Cpu as Engine, 
  Disc, 
  Lightbulb, 
  IterationCcw as Steering, 
  Droplets, 
  Wind,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Batteries", icon: Battery, items: "12 Products" },
  { name: "Braking", icon: Brake, items: "45 Products" },
  { name: "Engine Parts", icon: Engine, items: "89 Products" },
  { name: "Wheels & Tires", icon: Disc, items: "56 Products" },
  { name: "Lighting", icon: Lightbulb, items: "32 Products" },
  { name: "Steering", icon: Steering, items: "18 Products" },
  { name: "Oil & Fluids", icon: Droplets, items: "24 Products" },
  { name: "Exhaust", icon: Wind, items: "15 Products" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-brand-yellow font-black uppercase text-xs tracking-[0.2em] mb-2 block">
              Categories
            </span>
            <h2 className="text-3xl font-black text-navy tracking-tight">
              Shop by Category
            </h2>
          </div>
          <button className="flex items-center gap-2 text-zinc-400 hover:text-navy font-bold text-xs uppercase tracking-widest transition-colors">
            View All Categories <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-4">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-zinc-50 rounded-full group-hover:bg-brand-yellow transition-all duration-500 scale-95 group-hover:scale-110" />
                
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <cat.icon className="w-8 h-8 text-navy group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-[14px] font-black text-navy uppercase tracking-tight mb-1 group-hover:text-brand-yellow transition-colors">
                {cat.name}
              </h3>
              <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
                {cat.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
