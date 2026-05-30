/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Tv, 
  Clock, 
  Database
} from 'lucide-react';
import { Episode } from '../types.ts';
import { EPISODES, OTHER_WALLPAPERS } from '../data.ts';

export default function EpisodeList() {
  const [previewingWall, setPreviewingWall] = useState<typeof OTHER_WALLPAPERS[0] | null>(null);

  return (
    <div className="w-full space-y-8" id="episodes-view-section">
      
      {/* Episodes Showcase Container */}
      <div 
        id="episodes-display-structure"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {EPISODES.map((episode) => {
          return (
            <div
              key={episode.id}
              id={`episode-card-${episode.id}`}
              className="group bg-white border border-pink-50 hover:border-pink-300/60 rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_8px_20px_rgba(244,143,177,0.04)] hover:shadow-[0_12px_24px_rgba(244,143,177,0.1)] flex flex-col"
            >
              {/* Visual Thumbnail Frame */}
              <div className="relative overflow-hidden bg-pink-50 w-full">
                <div className="aspect-[4/3] relative w-full overflow-hidden">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    onError={(e) => {
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = `https://picsum.photos/seed/${episode.id}/600/450`;
                    }}
                  />
                  
                  {/* Shadow overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Floating Episode Counter Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-sans text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                    EPISODE {episode.episodeNumber < 10 ? `0${episode.episodeNumber}` : episode.episodeNumber}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {episode.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-pink-50 text-pink-600/90 border border-pink-100 rounded-md px-2 py-0.5 text-[9px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-slate-800 text-base sm:text-lg leading-snug group-hover:text-pink-600 transition-colors">
                    {episode.title}
                  </h3>

                  {/* Plot Description */}
                  <p className="text-slate-500 text-xs font-sans mt-2 mb-4 leading-relaxed line-clamp-3 font-medium">
                    {episode.description}
                  </p>
                </div>

                <div>
                  {/* Metadata specs box */}
                  <div className="grid grid-cols-3 gap-2 border-t border-b border-pink-50/70 py-3 mb-4 text-center font-sans">
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                        Resolution
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-700 flex items-center justify-center gap-1 mt-0.5">
                        <Tv className="w-3.5 h-3.5 text-pink-400" />
                        {episode.resolution}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                        Size
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-700 flex items-center justify-center gap-1 mt-0.5">
                        <Database className="w-3.5 h-3.5 text-amber-500" />
                        {episode.size}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                        Duration
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-700 flex items-center justify-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {episode.duration}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Download Trigger Button */}
                  <a
                    id={`get-link-btn-${episode.id}`}
                    href={episode.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 hover:from-pink-400 hover:via-rose-400 hover:to-rose-500 text-white rounded-xl text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer text-center flex items-center justify-center shadow-[0_4px_12px_rgba(244,143,177,0.25)] hover:shadow-[0_4px_18px_rgba(244,143,177,0.35)] active:scale-98 border-none"
                  >
                    <span>Direct Download Link</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sweet Wallpaper Bonus Club - Interactive display of the other 4 beautiful wallpapers */}
      <div 
        id="anya-wallpaper-club-section" 
        className="bg-white border border-pink-100 rounded-3xl p-5 sm:p-6 shadow-[0_12px_30px_rgba(244,143,177,0.06)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="wallpaper-artwork-grid">
          {OTHER_WALLPAPERS.map((wall) => {
            const isUnlocked = true;
            return (
              <div 
                key={wall.id}
                className="group relative border border-pink-50 hover:border-pink-200 bg-pink-50/10 rounded-2xl p-3 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/4] bg-pink-50 rounded-xl overflow-hidden mb-3">
                    <img 
                      src={wall.image} 
                      alt={wall.title}
                      className="w-full h-full object-cover transition-all duration-500 filter-none"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://picsum.photos/seed/${wall.id}/300/400`;
                      }}
                    />
                  </div>

                  <h4 className="font-sans font-extrabold text-xs text-slate-800 line-clamp-1 leading-snug group-hover:text-pink-500 transition-colors">
                    {wall.title}
                  </h4>
                </div>

                <div className="mt-3">
                  <button 
                    onClick={() => setPreviewingWall(wall)}
                    className="w-full py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100/80 text-pink-600 border border-pink-100 font-sans text-[10px] font-bold uppercase transition-all flex items-center justify-center cursor-pointer"
                  >
                    <span>Download Portrait</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wallpapers Modal Preview */}
      {previewingWall && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6" id="wallpaper-modal">
          <div className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-pink-100 relative max-h-[90vh] flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-4 border-b border-pink-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <div>
                  <h3 className="font-sans font-bold text-sm text-slate-800">{previewingWall.title}</h3>
                  <p className="text-[10px] font-mono text-slate-400">{previewingWall.dimensions} • {previewingWall.sizeKB} KB</p>
                </div>
              </div>
              <button 
                onClick={() => setPreviewingWall(null)}
                className="p-1.5 hover:bg-pink-50 rounded-full transition-colors cursor-pointer text-slate-400 hover:text-slate-600 leading-none h-8 w-8 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Core Artwork display with responsive scale */}
            <div className="p-4 bg-pink-50/10 flex-grow overflow-y-auto flex items-center justify-center">
              <img 
                src={previewingWall.image} 
                alt={previewingWall.title}
                className="max-h-[50vh] object-contain rounded-xl shadow-lg border border-pink-100"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://picsum.photos/seed/${previewingWall.id}/500/600`;
                }}
              />
            </div>

            {/* Footer triggers download */}
            <div className="p-4 bg-pink-50/30 border-t border-pink-50 flex gap-2">
              <button 
                onClick={() => setPreviewingWall(null)}
                className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold font-sans text-xs transition-colors cursor-pointer text-center"
              >
                Close Preview
              </button>
              
              <a 
                href={previewingWall.image} 
                download={`${previewingWall.title}.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white font-bold font-sans text-xs transition-all shadow-md text-center flex items-center justify-center"
              >
                <span>Save Artwork JPG</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
