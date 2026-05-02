"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Batteries", hasSub: false },
  { name: "Brake disks & pads", hasSub: true },
  { name: "Car care kits", hasSub: true },
  { name: "Engine Parts", hasSub: false },
  { name: "Lighting", hasSub: true },
  { name: "Oil & lubricants", hasSub: true },
  { name: "Service kits", hasSub: false },
  { name: "Steering", hasSub: true },
  { name: "Suspension", hasSub: false },
  { name: "Tires & Wheels", hasSub: true },
  { name: "Suspension System", hasSub: false },
];

const Hero = () => {
  return (
    <section className="bg-white py-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* 1. SIDEBAR CATEGORIES */}
          <div className="hidden lg:block lg:col-span-3 border border-zinc-200 divide-y divide-zinc-100 rounded-b-xl overflow-hidden">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-3.5 hover:bg-zinc-50 cursor-pointer group transition-colors"
              >
                <span className="text-[14px] font-medium text-zinc-700 group-hover:text-navy transition-colors">
                  {cat.name}
                </span>
                {cat.hasSub && (
                  <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-navy" />
                )}
              </div>
            ))}
          </div>

          {/* 2. HERO BANNER */}
          <div className="col-span-1 lg:col-span-9 relative bg-brand-yellow rounded-2xl overflow-hidden h-[500px] lg:h-[550px] shadow-lg flex items-center">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-20 right-20 w-96 h-96 bg-black rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full blur-[80px]" />
              {/* Speed Lines */}
              <div className="absolute top-1/4 right-0 w-32 h-1 bg-navy/20 -rotate-45" />
              <div className="absolute top-1/2 right-10 w-48 h-1 bg-navy/10 -rotate-45" />
              <div className="absolute bottom-1/4 right-20 w-32 h-1 bg-white/20 -rotate-45" />
            </div>

            <div className="relative z-10 px-8 lg:px-16 w-full flex flex-col lg:flex-row justify-between items-center gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block py-1 px-3 bg-black/5 text-navy text-sm font-bold rounded-lg mb-6 tracking-wide">
                    Top Quality
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-8">
                    Aftermarket <br />
                    Turbocharger <br />
                    Specialist
                  </h1>
                  <button className="px-10 py-4 bg-white text-navy font-black text-sm uppercase tracking-widest rounded-lg shadow-xl hover:bg-navy hover:text-white transition-all transform hover:scale-105 active:scale-95">
                    Discover More
                  </button>
                </motion.div>
              </div>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:w-1/2 flex justify-center"
              >
                {/* Decorative Halftone / Circle behind product */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1600706432502-77a0e2e327fc?q=80&w=2070&auto=format&fit=crop"
                  alt="Turbocharger"
                  className="relative z-10 w-full max-w-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                />
              </motion.div>
            </div>

            {/* Pagination / Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-3 h-3 rounded-full bg-navy" />
              <div className="w-3 h-3 rounded-full bg-navy/20" />
              <div className="w-3 h-3 rounded-full bg-navy/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
