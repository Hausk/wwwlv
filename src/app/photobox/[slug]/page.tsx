'use client'
import { PhotoBox } from "@/components/photo-box";
import { useState } from "react";

interface Image {
  /** Image source. */
  src: string;
  /** Image width in pixels. */
  width: number;
  /** Image height in pixels. */
  height: number;
}
interface Photo extends Image {
  /** Optional `key` attribute. */
  key?: string;
  /** Optional image `alt` attribute. */
  alt?: string;
  /** Optional image `title` attribute. */
  title?: string;
  /** @deprecated - use `srcSet` instead */
  images?: Image[];
  /** Optional array of alternative images to be included in the `srcset` attribute. */
  srcSet?: Image[];
}
// Génération de 40 URL d'images aléatoires
const slides: Photo[] = Array.from({ length: 40 }, (_, index) => {
  const width = Math.floor(Math.random() * (400 - 200 + 1)) + 200; // Largeur aléatoire entre 200 et 400
  const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Hauteur aléatoire entre 300 et 600
  return {
    src: `https://picsum.photos/${width}/${height}?random=${index}`,
    width,
    height,
    key: `slide-${index}`,
    alt: `Image ${index + 1}`,
    title: `Image ${index + 1}`,
  };
});

const Photobox = () => {
  return (
    <div className="min-h-screen flex overflow-x-hidden">
      <div className="w-[90%] my-20 m-auto break-all">
        <div className="mb-10 text-4xl font-semibold w-full flex">
          <h2 className="w-fit uppercasebreak-all text-balance">Test</h2>
        </div>
        <PhotoBox images={slides}/>
      </div>
    </div>
  )
}
export default Photobox