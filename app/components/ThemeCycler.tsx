"use client";
import { useEffect } from "react";

const HOLD_MS = 10000;  // hold each phase for 10s (transition takes 2s of that)

export default function ThemeCycler() {
  useEffect(() => {
    let light = false;
    const tick = () => {
      light = !light;
      document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
    };
    const id = setInterval(tick, HOLD_MS);
    return () => clearInterval(id);
  }, []);

  return null;
}
