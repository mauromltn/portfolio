'use client'
import { motion } from "framer-motion";

export const RevealAnimation = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}