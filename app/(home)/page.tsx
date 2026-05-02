import React from "react";
import Hero from "./includes/Hero";
import Features from "./includes/Features";
import Categories from "./includes/Categories";
import Deals from "./includes/Deals";
import PromoBanner from "./includes/PromoBanner";
import CarSection from "./includes/CarSection";
import Newsletter from "./includes/Newsletter";
import Accessories from "./includes/Accessories";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Categories />
      <PromoBanner />
      <CarSection />
      <Deals />
      <Newsletter />
    </main>
  );
}
