"use client";

import Image from "next/image";
import React from "react";
import { CardContainer, CardItem } from "@/components/3d-card";
import Link from "next/link";

export function WorksCard({ work }: { work: any }) {
  return (
    <CardContainer className="relative md:w-[60vh] w-4/6 lg:w-4/6">
      <Link
        className="w-full max-h-[50%] relative"
        href={"/photobox/" + work.slug}
      >
        <CardItem
          translateZ="100"
          className="flex overflow-hidden w-full h-fit max-h-[75vh] max-w-[75vh] md:h-[60vh] lg:h-fit rounded-md mt-4 relative"
        >
          <Image
            src={work.src ?? ""}
            height={2000}
            width={2000}
            className="h-auto w-full object-cover aspect-square rounded-xl group-hover/card:shadow-xl m-auto"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ={20}
          className="w-fit text-4xl font-semibold m-auto pt-2"
          as="p"
        >
          {work.title}
        </CardItem>
      </Link>
    </CardContainer>
  );
}
