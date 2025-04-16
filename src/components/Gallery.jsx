"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/assets/AboutImg1.png",
  "/assets/AboutImg2.png",
  "/assets/AboutImg3.png",
  "/assets/AboutImg1.png",
  "/assets/AboutImg2.png",
  "/assets/AboutImg3.png",
  "/assets/AboutImg1.png",
  "/assets/AboutImg2.png",
  "/assets/AboutImg3.png",
  "/assets/AboutImg1.png",
];

const Gallery = () => {
  return (
    <div>
      <p className="text-center text-6xl mb-6">Gallery</p>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-[90vw] mx-auto"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 basis-1/3"
            >
              <div className="p-1">
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt="Gallery Images"
                  className=""
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-[90vw] mx-auto"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 basis-1/3"
            >
              <div className="p-1">
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt="Gallery Images"
                  className=""
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-[90vw] mx-auto"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 basis-1/3"
            >
              <div className="p-1">
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt="Gallery Images"
                  className=""
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;
