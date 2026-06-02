// [Cosmic Constellation Loader]
import React from "react";
import { Sparkles } from "lucide-react";

export default function CosmicLoader({ message = "Aligning habit orbits..." }) {
  const colors = {
    primary: "#fbbf24",
    secondary: "#ec4899",
    tertiary: "#0ea5e9",
    glow: "rgba(251, 191, 36, 0.6)"
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base/95 backdrop-blur-xl">
      <style>{`
        @keyframes cosmic-rotate-clockwise { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes cosmic-rotate-counter { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        @keyframes cosmic-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; filter: drop-shadow(0 0 15px ${colors.glow}); }
          50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 30px ${colors.primary}); }
        }
        .cosmic-ring-1 { animation: cosmic-rotate-clockwise 12s linear infinite; }
        .cosmic-ring-2 { animation: cosmic-rotate-counter 8s linear infinite; }
        .cosmic-ring-3 { animation: cosmic-rotate-clockwise 18s linear infinite; }
        .cosmic-center { animation: cosmic-pulse 3s ease-in-out infinite; }
      `}</style>

      <div className="relative w-56 h-56 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_center,${colors.primary}18,transparent_70%)] blur-2xl rounded-full animate-pulse" />
        
        {/* Outer Orbit */}
        <div className="absolute w-52 h-32 border border-dashed border-zinc-500/25 rounded-full rotate-45 cosmic-ring-3">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full animate-pulse" style={{ backgroundColor: colors.tertiary, boxShadow: `0 0 10px ${colors.tertiary}` }} />
        </div>

        {/* Middle Orbit */}
        <div className="absolute w-40 h-40 border border-zinc-500/30 rounded-full cosmic-ring-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: colors.secondary, boxShadow: `0 0 12px ${colors.secondary}` }} />
        </div>

        {/* Inner Orbit */}
        <div className="absolute w-28 h-16 border border-zinc-500/40 rounded-full -rotate-30 cosmic-ring-1">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary, boxShadow: `0 0 10px ${colors.primary}` }} />
        </div>

        {/* Center Nucleus */}
        <div className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl cosmic-center" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
          <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <div className="mt-8 text-center animate-fade-in">
        <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: colors.primary }}>Synthesizing Matrix</p>
        <p className="text-base font-medium mt-1 text-zinc-700 dark:text-zinc-300">{message}</p>
      </div>
    </div>
  );
}
