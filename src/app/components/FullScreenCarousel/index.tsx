"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageProps {
  src: string;
  alt: string;
}

interface FullScreenCarouselProps {
  images: ImageProps[];
  initialIndex: number;
}

export function FullScreenCarousel({ images, initialIndex }: FullScreenCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-3/4 h-full mx-auto">
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#243a69] bg-opacity-75 text-white p-2 rounded-full hover:bg-[#5b88a5]"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#243a69] bg-opacity-75 text-white p-2 rounded-full hover:bg-[#5b88a5]"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
