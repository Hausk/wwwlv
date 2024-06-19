import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { motion } from "framer-motion";
import { WobbleCard } from "./ui/wooble-card";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <WobbleCard
      containerClassName="bg-transparent overflow-hidden rounded-md"
      className="p-0 bg-transparent"
    >
      <div className="m-0 scale-120" style={{ ...wrapperStyle, position: "relative", marginBottom: '0' }}>
        <Image
            fill
            src={photo.src}
            placeholder={"blurDataURL" in photo ? "blur" : undefined}
            className="scale-110"
            {...{ alt, title, sizes, onClick }}
        />
      </div>
    </WobbleCard>
  );
}