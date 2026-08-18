"use client";

import React, { useState } from "react";
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/aceternity/resizable-navbar";
import { Brand } from "@/components/shared/Brand";
import { mainNav, ctaNav } from "@/data/navigation";
import Link from "next/link";

import { useJoinModal } from "@/components/join/hooks/useJoinModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openJoinModal } = useJoinModal();

  // Lock body scroll when mobile hamburger drawer is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Map our NavItem format to the format expected by aceternity NavItems
  const items = mainNav.map((item) => ({
    name: item.title,
    link: item.href,
  }));

  return (
    <div className="relative w-full">
      <AceternityNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="mr-4">
            <Link href="/" className="z-20 flex items-center">
              <Brand size="md" variant="full" />
            </Link>
          </div>
          
          <NavItems items={items} />
          
          <div className="flex items-center gap-4">
            <NavbarButton 
              onClick={openJoinModal}
              variant="primary"
            >
              {ctaNav.title}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation Header & Drawer */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
              <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                NAVIGATION
              </div>
              <span className="text-xs text-neutral-500 font-mono">TechSpace</span>
            </div>

            <div className="w-full space-y-1 py-1">
              {items.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between min-h-[48px] px-3.5 py-2.5 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all duration-200"
                >
                  <span>{item.name}</span>
                  <span className="text-neutral-500 text-xs font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="w-full pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openJoinModal();
                }}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-white text-black font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{ctaNav.title}</span>
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
