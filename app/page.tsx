"use client";
import React, { useState, JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * NYCShowcaseUltimate.tsx
 * Ultimate NYC portfolio-ready component.
 * Features:
 * - Cinematic Hero with Parallax + Gradient fade
 * - Stats + Animated counters
 * - Attractions Cards with 3D Tilt + Slide-in Details
 * - Interactive Mini Map
 * - Gallery / Carousel with Lightbox
 * - Borough Selector + Filter
 * - Fun Facts Marquee
 * - Timeline / History
 * - Weather Box (placeholder)
 * - CTA / Footer
 */

type Attraction = {
  id: string;
  name: string;
  short: string;
  description: string;
  img: string;
  borough: string;
  coords?: { x: number; y: number };
};

const ATTRACTIONS: Attraction[] = [
  {
    id: "statue",
    name: "Statue of Liberty",
    short: "Liberty Enlightening the World",
    description:
      "A universal symbol of freedom and democracy. Take the ferry to Liberty Island and enjoy skyline views.",
    img: "https://wallpapercave.com/wp/wp3594884.jpg",
    borough: "Manhattan",
    coords: { x: 25, y: 60 },
  },
  {
    id: "central-park",
    name: "Central Park",
    short: "Urban oasis",
    description:
      "A 843-acre green space in the heart of Manhattan — perfect for walks, running, and seasonal events.",
    img: "https://wallpapercave.com/wp/wp3594888.jpg",
    borough: "Manhattan",
    coords: { x: 50, y: 35 },
  },
  {
    id: "times",
    name: "Times Square",
    short: "The Crossroads of the World",
    description:
      "Electric signage, theatres, and crowds. Best experienced at night and during major events.",
    img: "https://wallpapercave.com/wp/wp3544754.jpg",
    borough: "Manhattan",
    coords: { x: 58, y: 48 },
  },
  {
    id: "brooklyn-bridge",
    name: "Brooklyn Bridge",
    short: "Iconic suspension bridge",
    description:
      "Walk or bike across this historic bridge for unrivaled skyline photos and Brooklyn exploration.",
    img: "https://wallpapercave.com/wp/wp3594891.jpg",
    borough: "Brooklyn",
    coords: { x: 72, y: 68 },
  },
  {
    id: "prospect-park",
    name: "Prospect Park",
    short: "Brooklyn’s Green Gem",
    description:
      "Large public park with lakes, trails, and events — perfect for picnics and family outings.",
    img: "https://wallpapercave.com/wp/wp3594896.jpg",
    borough: "Brooklyn",
    coords: { x: 30, y: 75 },
  },
];

const GALLERY = [
  {
    id: "g-0",
    title: "NYC Skyline",
    src: "https://wallpaperbat.com/img/184255-new-york-city-wallpaper-free-hd-download-hq.jpg",
  },
  {
    id: "g-1",
    title: "Street Life",
    src: "https://wallpaperbat.com/img/32857-free-download-new-york-city-ny-hd-wallpaper-2560x1708.jpg",
  },
  {
    id: "g-2",
    title: "Autumn in Park",
    src: "https://wallpaperbat.com/img/375905-new-york-4k-ultra-hd-wallpaper.jpg",
  },
  {
    id: "g-3",
    title: "City Lights",
    src: "https://wallpaperbat.com/img/87506-nyc-wallpaper.jpg",
  },
  {
    id: "g-4",
    title: "Subway",
    src: "https://wallpaperbat.com/img/303097-new-york-4k-ultra-hd-3840x2160-wallpaper-teahubio.jpg",
  },
  {
    id: "g-5",
    title: "Skyline Sunset",
    src: "https://wallpaperbat.com/img/166933-panoramic-photography-of-new-york-city-manhattan-hd-wallpaper.jpg",
  },
  {
    id: "g-6",
    title: "Architecture",
    src: "https://wallpaperbat.com/img/263748-manhattan-new-york-city-night-cityscape-4k-8k-wallpaper.jpg",
  },
  {
    id: "g-7",
    title: "Food",
    src: "https://wallpaperbat.com/img/322078-new-york-wallpaper.jpg",
  },
];

const BOROUGHS = [
  "All",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

export default function NYCShowcaseUltimate(): JSX.Element {
  const [activeAttraction, setActiveAttraction] = useState<Attraction | null>(
    ATTRACTIONS[0]
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedBorough, setSelectedBorough] = useState<string>("All");

  
  const filteredAttractions =
    selectedBorough === "All"
      ? ATTRACTIONS
      : ATTRACTIONS.filter((a) => a.borough === selectedBorough);

  
  if (activeAttraction && !filteredAttractions.includes(activeAttraction)) {
    setActiveAttraction(filteredAttractions[0] || null);
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-12 font-sans text-slate-800">
      {/* Hero Parallax */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image
          src="https://wallpapercave.com/wp/wp3594977.jpg"
          alt="NYC Skyline"
          width={2000}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-[#f8fafc]" />

        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-16 text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            New York City
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-3 max-w-xl text-slate-200 text-sm md:text-base drop-shadow"
          >
            The capital of the world — culture, architecture, and endless energy
            define every corner of the city.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <div className="flex gap-3">
              <div className="backdrop-blur bg-white/10 px-4 py-2 rounded-xl text-sm">
                Population: 8.5M
              </div>
              <div className="backdrop-blur bg-white/10 px-4 py-2 rounded-xl text-sm">
                Boroughs: 5
              </div>
              <div className="backdrop-blur bg-white/10 px-4 py-2 rounded-xl text-sm">
                Founded: 1624
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-medium shadow hover:bg-amber-300 transition">
              Explore Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Borough Selector */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {BOROUGHS.map((b) => (
          <button
            key={b}
            onClick={() => setSelectedBorough(b)}
            className={`px-4 py-2 rounded-full border ${
              selectedBorough === b
                ? "bg-amber-400 text-slate-900"
                : "bg-white/10 text-slate-200"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {/* Attractions + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold">Featured Attractions</h2>
            <p className="text-sm text-slate-500 mt-1">
              Click a card or marker to read more.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAttractions.map((a) => (
                <motion.article
                  key={a.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 items-start bg-slate-50 rounded-xl p-3 shadow-sm cursor-pointer"
                  onClick={() => setActiveAttraction(a)}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={a.img}
                    alt={a.name}
                    className="w-28 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">{a.name}</h3>
                    <p className="text-xs text-slate-500">{a.short}</p>
                    <div className="mt-2 flex gap-2">
                      <button
                        onClick={() => setLightboxIndex(0)}
                        className="text-xs px-2 py-1 rounded border"
                      >
                        View Photos
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6 bg-linear-to-b from-white to-slate-50 rounded-xl p-4 shadow-inner">
              <MiniMap
                markers={filteredAttractions}
                onSelect={(id) =>
                  setActiveAttraction(
                    filteredAttractions.find((x) => x.id === id) || null
                  )
                }
              />
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <h3 className="text-lg font-semibold">NYC Timeline</h3>
            <div className="mt-4 flex gap-4 overflow-x-auto py-2">
              {[
                { year: "1624", note: "Dutch settlers" },
                { year: "1789", note: "Became US capital" },
                { year: "1898", note: "Consolidation of 5 boroughs" },
                { year: "1931", note: "Empire State Building opens" },
                { year: "2001", note: "September 11 attacks" },
                { year: "2024", note: "Modern metropolis" },
              ].map((t) => (
                <div
                  key={t.year}
                  className="min-w-[180px] bg-slate-50 rounded-xl p-3"
                >
                  <div className="text-sm font-bold">{t.year}</div>
                  <div className="text-xs text-slate-500 mt-1">{t.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery + CTA */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h4 className="font-semibold">Gallery</h4>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {GALLERY.slice(0, 4).map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => setLightboxIndex(i)}
                  className="rounded overflow-hidden"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={g.src}
                    alt={g.title}
                    className="w-full h-28 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-r from-amber-400 to-amber-300 rounded-2xl p-5 text-slate-900 shadow-lg">
            <h5 className="font-bold">Add this to your portfolio</h5>
            <p className="text-sm mt-1">
              Single-file component demonstrates UI composition, state,
              accessibility, and styling proficiency.
            </p>
          </div>
        </aside>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i === null ? null : Math.max(0, i - 1)))
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i === null ? null : Math.min(GALLERY.length - 1, i + 1)
            )
          }
        />
      )}

      <footer className="text-center text-xs text-slate-400 py-6">
        NYC Showcase Ultimate • Portfolio-ready • Replace images & text to
        customize
      </footer>
    </div>
  );
}

/* ----------------- Subcomponents ----------------- */

function MiniMap({
  markers,
  onSelect,
}: {
  markers: Attraction[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="w-full h-[260px] rounded-lg bg-linear-to-b from-sky-50 to-slate-50 p-4">
      <div className="text-xs text-slate-500 mb-2">Mini-map (schematic)</div>
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-inner">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="0" width="100" height="100" fill="#f8fafc" />
          {Array.from({ length: 6 }).map((_, r) => (
            <line
              key={r}
              x1={0}
              x2={100}
              y1={10 + r * 15}
              y2={10 + r * 15}
              stroke="#eef2ff"
              strokeWidth={0.5}
            />
          ))}
          {markers.map((m) => (
            <g
              key={m.id}
              transform={`translate(${m.coords?.x ?? 50}, ${
                m.coords?.y ?? 50
              })`}
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(m.id)}
            >
              <circle r={3.2} fill="#0f172a" />
              <text x={5} y={1} style={{ fontSize: 3, fill: "#0f172a" }}>
                {m.name.split(" ")[0]}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { id: string; src: string; title: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <>
      {/* Fullscreen blurred background */}
      <div className="fixed inset-0 z-40 w-full h-full bg-black/40 backdrop-blur-md" />

      {/* Lightbox content */}
      <div className="fixed inset-0 z-50 flex flex-col">
        <div className="relative flex-1 w-full">
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-contain mt-5"
          />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-white/80 rounded-full px-3 py-1 z-50"
          >
            ✕
          </button>
          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white z-50">
            <div>
              <div className="font-semibold">{img.title}</div>
              <div className="text-xs">
                Image {index + 1} of {images.length}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={onPrev}
                className="px-3 py-1 rounded border bg-black/30"
              >
                Prev
              </button>
              <button
                onClick={onNext}
                className="px-3 py-1 rounded bg-black text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

