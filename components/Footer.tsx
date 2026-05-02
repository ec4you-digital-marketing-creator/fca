import React from "react";
import Link from "next/link";
import { Globe as Facebook, Link2 as Twitter, Mail as Instagram, Send as Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center rotate-45">
                <div className="-rotate-45 font-black text-black">A</div>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">AUTO ELITE</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Defining the future of luxury mobility. Since 1994, we have been delivering unparalleled excellence in automotive engineering.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Inventory", "Pre-Owned", "Finance", "Service", "Parts"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm font-medium">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>123 Performance Drive, <br />Automotive Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm font-medium">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm font-medium">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>concierge@autoelite.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6 font-medium">Subscribe to receive updates on new models and exclusive events.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-xl text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-medium">
            © 2026 Auto Elite Automotive Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-medium">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
