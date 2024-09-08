"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Modal } from '../Modal';
import { FullScreenCarousel } from '../FullScreenCarousel';


interface ImageProps {
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: ImageProps[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 sm:h-96">
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
              onClick={openModal}
              className="cursor-pointer"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-[#243a69]' : 'bg-[#f4f4f2]'
            }`}
          ></div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FullScreenCarousel images={images} initialIndex={currentIndex} />
      </Modal>
    </div>
  );
}
