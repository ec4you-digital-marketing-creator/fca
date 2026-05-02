"use client";

import React, { useState } from "react";
// import Image from "next/image";
// import logo from "../public/logo.png";
import Link from "next/link";
import {
  Globe as Facebook,
  Link2 as Twitter,
  Mail as Instagram,
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
  PhoneCall
} from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col font-sans">
      {/* 1. TOP BAR */}
      <div className="bg-navy border-b border-white/10 text-white py-2 text-[13px]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-yellow transition-colors">Shipping</Link>
            <Link href="#" className="hover:text-brand-yellow transition-colors">FAQ</Link>
            <Link href="#" className="hover:text-brand-yellow transition-colors">Contact</Link>
            <Link href="#" className="hover:text-brand-yellow transition-colors">Track Order</Link>
          </div>

          <div className="hidden md:block font-medium tracking-tight">
            FREE SHIPPING WORLDWIDE
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-brand-yellow" />
              <Twitter className="w-3.5 h-3.5 cursor-pointer hover:text-brand-yellow" />
              <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-brand-yellow" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-brand-yellow transition-colors">
              <span className="flex items-center gap-1.5 font-medium uppercase text-[11px]">
                <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-4 h-auto" />
                English
              </span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN BAR */}
      <div className="bg-navy py-6">
        <div className="container mx-auto px-4 flex items-center gap-8 lg:gap-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black text-brand-yellow italic tracking-tighter">FCA</span>
              <span className="text-3xl font-black text-white italic tracking-tighter mt-[-4px]">TAMBARAM</span>
              {/* <Image src={logo} alt="fca" className="h-10 w-auto object-contain" /> */}
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 items-center max-w-3xl">
            <div className="flex w-full bg-white rounded-lg overflow-hidden group">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-5 py-3.5 text-zinc-800 focus:outline-none placeholder:text-zinc-400"
              />
              <div className="px-6 py-3.5 border-l border-zinc-100 flex items-center gap-2 text-zinc-600 bg-zinc-50 cursor-pointer hover:bg-zinc-100 transition-colors">
                <span className="text-sm font-semibold">All Category</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button className="bg-white px-6 py-3.5 text-zinc-800 hover:text-navy transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-6">
              <Link href="#" className="text-white hover:text-brand-yellow transition-colors">
                <User className="w-6 h-6 stroke-[1.5]" />
              </Link>
              <Link href="#" className="text-white hover:text-brand-yellow transition-colors relative">
                <Heart className="w-6 h-6 stroke-[1.5]" />
                <span className="absolute -top-1.5 -right-2.5 bg-brand-yellow text-navy text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-navy">
                  9
                </span>
              </Link>
              <Link href="#" className="text-white hover:text-brand-yellow transition-colors relative">
                <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
                <span className="absolute -top-1.5 -right-2.5 bg-brand-yellow text-navy text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-navy">
                  0
                </span>
              </Link>
            </div>
            <button
              className="lg:hidden text-brand-yellow"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="bg-navy border-t border-white/10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Category Button Column */}
            <div className="col-span-3">
              <button className="w-full bg-brand-yellow px-8 py-4 flex items-center gap-3 text-navy font-bold uppercase tracking-wide rounded-t-xl">
                <Menu className="w-5 h-5 stroke-[2.5]" />
                Browse Categories
              </button>
            </div>

            {/* Nav Links Column */}
            <div className="col-span-9 flex items-center justify-between">
              <nav className="flex items-center gap-8">
                {["HOME", "SHOP", "PAGES", "BLOG", "CONTACT"].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className={`text-[13px] font-black tracking-widest text-white hover:text-brand-yellow flex items-center gap-1.5 transition-colors ${link === "HOME" ? "text-brand-yellow" : ""}`}
                  >
                    {link}
                    {(link === "HOME" || link === "SHOP" || link === "PAGES" || link === "BLOG") && (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Contact info */}
              <div className="flex items-center gap-3 text-brand-yellow">
                <PhoneCall className="w-5 h-5 stroke-[2.5]" />
                <span className="text-[15px] font-black tracking-tight text-white">1-800-234-5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
