/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
  
export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative bg-transparent">
      <div className="relative z-20 h-screen w-full bg-transparent">
        {/* Portrait - Behind text for overlap effect */}
        <div className="absolute top-24 md:top-32 xl:top-36 left-[590px] md:left-[810px] xl:left-[910px] z-10">
          <div className="overflow-visible bg-secondary/80 backdrop-blur-sm">
            <img
              src="/mee.jpg"
              alt="Designer portrait"
              className="h-[360px] md:h-[460px] xl:h-[560px] w-auto object-contain grayscale"
              style={{ maxHeight: '70vh' }}
            />
          </div>
        </div>

        {/* DEVELOPER in left top corner - overlapping image with "er" */}
        <div className="absolute top-0 left-32 md:left-40 xl:left-48 z-30 pl-6 pt-6 overflow-visible">
          <h1 className="text-white font-bold tracking-[-3px] text-7xl md:text-9xl xl:tracking-[-0.5rem] md:tracking-[-8px] xl:text-[10rem] leading-none block relative overflow-visible" style={{ zIndex: 30 }}>
            DEVELOPER
          </h1>
          
          {/* SHAGUN SINGH just below DEVELOPER - aligned to start */}
          <p className="text-4xl font-medium tracking-[6px] text-white mt-0 md:mt-1 block text-left" style={{ marginLeft: '0.5%' }}>
            SHAGUN SINGH
          </p>
        </div>

        {/* Skills Section - Starting below "L" in DEVELOPER, positioned right before image */}
        <div className="absolute top-72 md:top-80 xl:top-96 left-[500px] md:left-[720px] xl:left-[820px] z-20">
          <div className="bg-black/30 backdrop-blur-sm px-4 py-3 rounded-md">
            <div className="font-semibold text-xl text-white space-y-2">
              <Link href="/projects" className="block hover:text-gray-300 transition-colors">
                / projects
              </Link>
              <div>/certificates</div>
              <div>/tech stack</div>
            </div>
          </div>
        </div>

        {/* Bio text at bottom center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base text-white">
            I'M A FULL-STACK WEB DEVELOPER,
            <br />
            WHO DESIGNS AND BUILDS SCALABLE PRODUCTS AND
            <br />
            LOVES SOLVING DSA AND ALGORITHMS
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <Link href="/contact">
            <Button size={"lg"}>Get in touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
