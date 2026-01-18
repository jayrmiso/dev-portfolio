"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  return (
    <header
      className={`flex items-center justify-between h-16 sticky top-0 z-50 ${top ? "transition-shadow shadow-md" : ""} px-50`}
    >
      <h1></h1>
      <div className="bg-black-200">div</div>
    </header>
  );
}
