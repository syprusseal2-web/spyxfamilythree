/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Star
} from 'lucide-react';
import EpisodeList from './components/EpisodeList.tsx';

export default function App() {
  return (
    <div 
      id="full-site-canvas" 
      className="min-h-screen bg-rose-50/30 text-slate-700 flex flex-col justify-between selection:bg-pink-300 selection:text-pink-900 font-sans relative antialiased"
    >
      {/* Isolated background decorations block - strict bounds prevents scroll issues */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10" id="ambient-decorations-container">
        {/* Elegantly soft peach-pink ambient glow backgrounds */}
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-rose-100/40 rounded-full blur-3xl" />
        
        {/* Decorative Stella Star Patterns */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30">
          <Star className="absolute top-10 left-[8%] w-4 h-4 text-pink-300 rotate-12" />
          <Star className="absolute top-[40%] right-[6%] w-5 h-5 text-amber-300 -rotate-12 animate-pulse" />
          <Heart className="absolute top-[65%] left-[5%] w-4 h-4 text-rose-300" />
          <Star className="absolute top-[20%] right-[20%] w-3 h-3 text-pink-400 rotate-45" />
          <Heart className="absolute top-[85%] right-[15%] w-5 h-5 text-pink-200 animate-bounce" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      {/* Main Container - Mobile Friendly spacing */}
      <main 
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10" 
        id="application-body"
      >

        {/* Hero banner section with Girly Family Styling */}
        <div 
          id="splash-hero-banner" 
          className="group border border-pink-100 bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_12px_30px_rgba(244,143,177,0.06)] flex flex-col md:flex-row gap-6 md:gap-8 items-stretch mb-8"
        >
          {/* Split Column 1: Picture Frame */}
          <div className="w-full md:w-[42%] aspect-[16/10] md:aspect-auto rounded-2xl overflow-hidden bg-pink-50 border border-pink-100/80 flex-shrink-0 relative min-h-[180px] md:min-h-0">
            <img
              src="/assets/3e20fe782c2b194dd30f0ab788222fce.jpg"
              alt="Spy X Family S3 Happy Family Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out brightness-[0.98] group-hover:scale-101"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://picsum.photos/seed/spyfamily-season3-banner/800/500`;
              }}
            />
            {/* Season status floating badge on the image */}
            <div className="absolute top-3 left-3 bg-pink-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Season 3 Complete
            </div>
          </div>

          {/* Split Column 2: Text details and specs */}
          <div className="flex-grow flex flex-col justify-between py-1">
            <div>
              <h2 className="font-sans font-black text-xl sm:text-2xl text-slate-800 tracking-tight leading-tight">
                Spy x Family Season 3 Episodes
              </h2>
              
              <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-3 max-w-2xl font-semibold">
                Download all episodes of Spy x Family Season 3 with fast direct links.
              </p>
            </div>

            {/* Specs indicator box */}
            <div className="grid grid-cols-3 gap-4 border-t border-pink-50 pt-4 mt-5 text-center font-sans">
              <div className="space-y-0.5">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                  MKV FILES
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-pink-600">
                  13 Episodes
                </span>
              </div>
              <div className="space-y-0.5 border-l border-pink-50/70">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                  TOTAL SIZE
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-600">
                  3.95 GB
                </span>
              </div>
              <div className="space-y-0.5 border-l border-pink-50/70">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                  QUALITY
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-600">
                  1080p Bluray
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Layout Screens switcher - Render EpisodeList unconditionally */}
        <EpisodeList />

      </main>
    </div>
  );
}
