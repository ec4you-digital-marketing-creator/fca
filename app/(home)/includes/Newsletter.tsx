"use client";

import React from "react";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-yellow text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              <Mail className="w-3 h-3" /> Get Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Join Our Automotive <br />
              Community Today
            </h2>
            <p className="text-white/60 text-sm font-medium">
              Receive the latest deals, exclusive tuning tips, and new product alerts directly in your inbox. No spam, only performance.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/20 text-white px-8 py-5 rounded-xl focus:outline-none focus:border-brand-yellow focus:bg-white/10 transition-all placeholder:text-white/30 font-medium"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-brand-yellow text-navy font-black text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors flex items-center gap-2"
              >
                Subscribe <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="mt-4 text-[11px] text-white/40 text-center lg:text-left font-bold uppercase tracking-tighter">
              By subscribing, you agree to our <span className="text-brand-yellow cursor-pointer underline">Privacy Policy</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
