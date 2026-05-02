"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="py-8 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Banner 1: Performance */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd348a54c2b2?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-500" />
            
            <div className="relative h-full p-10 flex flex-col justify-center">
              <span className="text-brand-yellow font-black uppercase text-[10px] tracking-widest mb-4">
                Performance Boost
              </span>
              <h2 className="text-3xl font-black text-white leading-tight mb-6">
                Engine & Turbo <br />
                Kits Up To 40% Off
              </h2>
              <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest group/btn">
                Shop Now <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>
          </motion.div>

          {/* Banner 2: Exterior */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600706432502-77a0e2e327fc?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-brand-yellow/80 group-hover:bg-brand-yellow/70 transition-colors duration-500" />
            
            <div className="relative h-full p-10 flex flex-col justify-center">
              <span className="text-navy font-black uppercase text-[10px] tracking-widest mb-4">
                Exterior Tuning
              </span>
              <h2 className="text-3xl font-black text-navy leading-tight mb-6">
                Premium Alloy <br />
                Wheels Collection
              </h2>
              <button className="flex items-center gap-2 text-navy font-black text-xs uppercase tracking-widest group/btn">
                Discover More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>

            {/* Price Tag Overlay */}
            <div className="absolute top-10 right-10 bg-navy text-white p-4 rounded-full flex flex-col items-center justify-center w-20 h-20 shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500">
               <span className="text-[10px] font-bold uppercase leading-none">From</span>
               <span className="text-xl font-black">$299</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
