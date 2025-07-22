"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography color="blue" variant="h6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          #tanagupa #nationalpark #kemenhut
        </Typography>
        <Typography className="my-12 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Taman Nasional Gunung Palung is more than a protected area—it’s a living mosaic of West Borneo’s green soul.  
        From mangrove and peat swamp at its edges to lowland and montane forests within, every layer 
        shelters hidden lives and ancient rhythms. In these forests, the air still carries whispers of 
        biodiversity older than memory.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          A Sanctuary for Earth’s Silent Architects
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Across its sprawling 108,000 hectares, Gunung Palung is home to deep canopies and secretive 
          denizens that balance life in layers. Towering dipterocarps and endemic trees like <i>Vatica 
          palungensis</i> rise above, while below, rare fungi and orchids weave silent connections. The park 
          shelters about 2,500 Bornean orangutans—nearly 10 % of their global population—alongside gibbons, 
          proboscis monkeys, sun bears, clouded leopards, pangolins, and over 230 bird species including 
          hornbills and pittas.  
          The woodlands are not merely backdrop—they're the stage upon which life performs a delicate 
          ecological ballet every day.
        </Typography>
        <Image
          width={768}
          height={500}
          src="/image/event.jpeg"
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography variant="small" className="font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Photo by Tim Laman
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            Unsplash
          </a>
        </Typography>

        <Typography className="my-12 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          But this sanctuary is fragile. Illegal logging, fires, and agro-conversion in buffer zones threaten 
          canopy connectivity—critical for arboreal species like orangutans. In fragmented forests, densities 
          fell from 1 per 2 km² to as low as 1 per 20 km².  Still, communities and NGOs have rallied. Stories include reforestation efforts tied to health clinics, 
          chainsaw buy-back programs, and stepped-up patrols—all reducing deforestation and reigniting hope.
        </Typography>

        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Why Gunung Palung Matters
        </Typography>

        <Typography className="my-10 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          • It conserves one of the world’s richest biological tapestries—from peat swamps to mist-laden hills.<br></br>  
          • It sustains one of Borneo’s densest populations of critically endangered orangutans.<br></br> 
          • It provides over two decades of invaluable ecological research, shaping global understanding of how food availability influences reproduction in great apes.<br></br>   
          • It exemplifies how local stewardship combined with scientific insight can reverse environmental decline. <br></br>  
          • Its future echoes far beyond its borders—as a symbol of coexistence between humanity and wilderness.<br></br> 
        </Typography>
        <div className="container mx-auto px-4 py-20">
          <div className="w-full mb-10 md:flex items-center justify-between">
            <div className="flex mb-5 md:mb-0 items-center gap-3">
              <Button size="sm" color="gray" variant="outlined">
                stories
              </Button>
              <Button size="sm" color="gray" variant="outlined">
                design
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 bg-[#35518D] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-facebook text-lg" />
              </button>
              <button className="w-9 h-9 bg-[#EA4C89] hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-dribbble text-lg" />
              </button>
              <button className="w-9 h-9 bg-gray-900 hover:cursor-pointer rounded-lg flex items-center justify-center ">
                <i className="text-white fab fa-github text-lg" />
              </button>
            </div>
          </div>
          <div className=" md:flex items-center justify-between">
            <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/image/avatar1.jpg"
                  className="rounded-2xl"
                  alt="photo"
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  className="mb-4 md:mb-0"
                  color="blue-gray"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Emma Roberts
                </Typography>
                <Typography className="w-full md:w-10/12 font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  Dr. Sarah Mitchell is a passionate and accomplished biologist
                  with a deep-rooted fascination for the intricate workings of
                  the natural world.
                </Typography>
              </div>
            </div>
            <Button
              color="gray"
              className="w-1/2 md:w-fit flex-shrink-0"
              size="md"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              follow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
