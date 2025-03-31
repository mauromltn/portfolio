'use client';
import { useState } from "react";
import Button from "./ui/Button";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <div className="fixed top-4 right-4">
      <motion.div
        className="relative w-40 h-70 bg-white rounded-2xl"
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