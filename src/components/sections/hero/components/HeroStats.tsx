import React from "react";
import { heroData } from "@/data/hero";
import { HeroStatCard } from "./HeroStatCard";

export function HeroStats() {
  return (
    <div className="w-full pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-2 gap-4 w-full">
        {heroData.stats.map((stat, idx) => (
          <HeroStatCard 
            key={idx} 
            value={stat.value} 
            label={stat.label} 
          />
        ))}
      </div>
    </div>
  );
}
