import { motion } from 'motion/react';

interface ButtonProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export default function Button({isActive, setIsActive}: ButtonProps) {
  return (
   <div
    onClick={() => setIsActive(!isActive)}
    onMouseEnter={() => setIsActive(true)}
    className="absolute top-0 right-0 overflow-hidden w-15 h-6.5 text-xs rounded-full cursor-pointer"
  >
    <motion.div
      className="relative w-full h-full"
      animate={{top: isActive ? '-100%' : '0%'}}
      transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
    >
      <div className="w-full h-full uppercase flex items-center justify-center bg-[var(--foreground)] text-[var(--background)]">menu</div>
      <div className="w-full h-full uppercase flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">close</div>
    </motion.div>
   </div>
  )
}
