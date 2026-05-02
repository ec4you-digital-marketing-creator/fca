"use client";

import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Universal Fit 2\" In/Out 13\" Overall Length Catalytic Converter...",
    category: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1621905235210-911270c53d10?q=80&w=2000&auto=format&fit=crop",
    price: "$746.64",
    rating: 4,
    badge: null,
    btnLabel: "BUY PRODUCT"
  },
  {
    id: 2,
    name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower Fi...",
    category: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    price: "$527.32",
    rating: 3,
    badge: "Out Of Stock",
    btnLabel: "READ MORE"
  },
  {
    id: 3,
    name: "2 Pieces 300 DB Super Train Horn For SUV Trucks Car-Boat...",
    category: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1616788478586-7a7187328906?q=80&w=2000&auto=format&fit=crop",
    price: "$80.00 - $120.00",
    rating: 5,
    badge: "-33%",
    btnLabel: "SELECT OPTIONS"
  },
  {
    id: 4,
    name: "AHOOGA ANTIQUE VINTAGE STYLE 110DB OLD FASHION...",
    category: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
    price: "$149.94",
    rating: 4,
    badge: null,
    btnLabel: "ADD TO CART"
  },
  {
    id: 5,
    name: "VEVOR Air Horn Train Horn for Boat Truck Car,12V 150DB 4...",
    category: "REPLACEMENT PARTS",
    image: "https://images.unsplash.com/photo-1549317661-bd348a54c2b2?q=80&w=2000&auto=format&fit=crop",
    price: "$724.75",
    rating: 4,
    badge: null,
    btnLabel: "ADD TO CART"
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white border border-zinc-100 p-5 group flex flex-col h-full transition-shadow hover:shadow-xl"
  >
    <div className="relative aspect-square mb-6 overflow-hidden flex items-center justify-center">
      {product.badge && (
        <span className={`absolute top-0 left-0 z-10 px-2 py-1 text-[10px] font-bold text-white rounded-sm ${product.badge === "Out Of Stock" ? "bg-zinc-400" : "bg-red-500"}`}>
          {product.badge}
        </span>
      )}
      {product.badge === "Out Of Stock" && (
        <div className="absolute inset-0 bg-white/60 z-5 flex items-center justify-center">
           <span className="bg-zinc-800/80 text-white text-[10px] px-3 py-1 rounded-full font-bold">Out of Stock</span>
        </div>
      )}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>

    <div className="mt-auto">
      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
        {product.category}
      </p>
      <h3 className="text-[13px] font-bold text-navy leading-snug mb-3 line-clamp-2 h-9">
        {product.name}
      </h3>
      
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-3 h-3 ${i < product.rating ? "fill-brand-yellow text-brand-yellow" : "text-zinc-200"}`} 
          />
        ))}
      </div>

      <p className="text-[15px] font-black text-blue-600 mb-6">
        {product.price}
      </p>

      <button className="w-full py-3 bg-brand-yellow text-navy text-[11px] font-black uppercase tracking-widest rounded-sm hover:bg-navy hover:text-white transition-colors duration-300">
        {product.btnLabel}
      </button>
    </div>
  </motion.div>
);

const Deals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-navy tracking-tight">
            Top Hot Deals
          </h2>
          <button className="px-6 py-2.5 bg-brand-yellow text-navy text-[10px] font-black uppercase tracking-widest border border-navy/10 shadow-[2px_2px_0px_#002D72] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
            See All Deals
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 border border-zinc-100 shadow-sm overflow-hidden bg-zinc-100">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
