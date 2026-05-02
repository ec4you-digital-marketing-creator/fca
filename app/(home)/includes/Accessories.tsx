"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ShoppingBag } from "lucide-react";

const accessories = [
  {
    id: 1,
    name: "Carbon Fiber Wing",
    category: "Aerodynamics",
    price: "$2,400",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Forged Alloy Wheels",
    category: "Performance",
    price: "$5,200",
    image: "https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Alcantara Steering",
    category: "Interior",
    price: "$1,850",
    image: "https://images.unsplash.com/photo-1594731802114-177995111166?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Ceramic Brake Kit",
    category: "Braking",
    price: "$8,900",
    image: "https://images.unsplash.com/photo-1600706432502-77a0e2e327fc?q=80&w=2070&auto=format&fit=crop",
  }
];

const Accessories = () => {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Precision Parts</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Enhance your vehicle with original accessories designed for performance.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-zinc-900 dark:text-white font-semibold hover:opacity-70 transition-opacity">
            Browse All <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-4 rounded-full bg-white text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <ShoppingBag className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{item.category}</p>
                  <p className="font-bold text-zinc-900 dark:text-white">{item.price}</p>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="md:hidden w-full mt-12 py-4 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-bold rounded-2xl">
          Browse All
        </button>
      </div>
    </section>
  );
};

export default Accessories;
