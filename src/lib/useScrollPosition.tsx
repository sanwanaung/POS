"use client";
import React, { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(document.body.scrollTop);
    };
    document.body.addEventListener("scroll", updatePosition);

    return () => document.body.removeEventListener("scroll", updatePosition);
  }, []);

  return { scrollPosition };
};
