'use client';
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "motion/react";
import Nav from "./Nav";

const variants = {
  open: {
    scale: 1,
    top: -5,
    right: -5,
    borderRadius: 16,
  },
  closed: {
    scale: 0,
    top: 5,
    right: 5,
    borderRadius: 100,
  }
}

export default function Menu() {

  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isActive) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  return (
    <div ref={menuRef} className="fixed top-4 right-4 z-10">
      <motion.div
        className="relative w-40 h-70 bg-foreground rounded-2xl"
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