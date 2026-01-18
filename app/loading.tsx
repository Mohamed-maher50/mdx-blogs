"use client";
import Image from "next/image";
import React from "react";

const RootLoading = () => {
  return (
    <div className="fixed z-50  flex items-center justify-center bg-black inset-0 isolate">
      <Image
        src={"/FlipBookLoader.gif"}
        width={150}
        height={150}
        className="object-contain"
        alt="loading gif"
      />
    </div>
  );
};

export default RootLoading;
