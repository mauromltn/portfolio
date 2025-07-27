'use client';
import { useState, useRef } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "motion/react";
import Nav from "./Nav";

const variants = {
  open: {
    scale: 1,
    top: -5,
    right: -5,
    borderRadius: 18
  },
  closed: {
    scale: 0,
    top: 5,
    right: 5,
    borderRadius: 100
  }
}

export default function Menu() {

  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onMouseLeave={() => setIsActive(false)}
      ref={menuRef}
      className="fixed pl-7.5 top-8 right-5 z-10"
    >
      <motion.div
        className="relative w-68 h-62 sm:w-55 sm:h-49 bg-[var(--foreground)]"
        variants={variants}
        initial="closed"
        animate={isActive ? "open" : "closed"}
        style={{ transformOrigin: "top right" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <AnimatePresence>
          {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}