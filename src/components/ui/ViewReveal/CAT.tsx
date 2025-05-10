'use client'
import { motion } from "framer-motion";

export const CAT = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0,  x: -100, filter: 'blur(10px)' }}
   whileInView={{ opacity: 1,  x: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row gap-9 sm:items-center"
    >
      {children}
    </motion.div>
  );
}