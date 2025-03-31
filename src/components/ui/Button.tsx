import { motion } from 'framer-motion';

interface ButtonProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export default function Button({isActive, setIsActive}: ButtonProps) {
  return (
   <div
    onClick={() => setIsActive(!isActive)}
    className="absolute top-0 right-0 overflow-hidden w-15 h-6.5 text-xs rounded-full cursor-pointer"
  >
    <motion.div
      className="relative w-full h-full"
      animate={{top: isActive ? '-100%' : '0%'}}
      transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
    >
      <div className="menu-button bg-white text-black">menu</div>
      <div className="menu-button bg-black text-white">close</div>
    </motion.div>
   </div>
  )
}
