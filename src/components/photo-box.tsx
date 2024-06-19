'use client'
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "./render-next-image";
import LightBoxNextJsImage from "./next-image";

export function PhotoBox({images}: {images: any}) {
  const [index, setIndex] = useState(-1);
  return (
    <>
    <PhotoAlbum photos={images} layout="columns"
      renderPhoto={NextJsImage}
      spacing={20}
      columns={(containerWidth) => {
        if (containerWidth < 1024) return 2;
        return 4;
      }} onClick={({ index }) => setIndex(index)} />

    <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{ slide: LightBoxNextJsImage }}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Counter]}
      />
    </>
  )
}