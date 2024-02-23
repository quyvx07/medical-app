import React from "react";
import Image from "next/image";
import PlaceHolderImage from "/public/img/fallback/default-fallback-image.webp";

export default function BaseImage(props) {
  return (
    <Image
      src={props?.src ? props.src : PlaceHolderImage}
      alt={props?.alt || "image"}
      loading="lazy"
      unoptimized
      style={{ objectFit: "contain" }}
      {...props}
    />
  );
}
