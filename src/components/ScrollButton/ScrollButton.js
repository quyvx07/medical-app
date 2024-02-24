"use client";

import IconScroll from "@/ui/IconScroll/IconScroll";
import React, { useEffect, useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.addEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className="fixed bottom-[30%] right-[10%]"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <IconScroll />
    </div>
  );
};

export default ScrollButton;
