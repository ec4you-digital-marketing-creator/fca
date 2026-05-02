"use client";

import React from "react";
import { Truck, Headset, ShieldCheck } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-center gap-5 p-6 group">
    <div className="shrink-0">
      <Icon className="w-10 h-10 text-brand-yellow stroke-[1.5]" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[15px] font-black text-navy uppercase tracking-tight group-hover:text-brand-yellow transition-colors">
        {title}
      </h3>
      <p className="text-[13px] text-zinc-500 font-medium">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="border border-white/10 rounded-xl shadow-2xl bg-white/5 backdrop-blur-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            <FeatureItem 
              icon={Truck}
              title="Fast and free delivery"
              description="Free delivery for all orders over $140"
            />
            <FeatureItem 
              icon={Headset}
              title="24/7 Customer Support"
              description="Friendly 24/7 customer support"
            />
            <FeatureItem 
              icon={ShieldCheck}
              title="Money back guarantee"
              description="We return money within 30 days"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
