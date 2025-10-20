import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, ease: 'easeOut', duration: 0.5 }
  })
}

export default function Animated({ children, className = '', index = 1, hover = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      custom={index}
      className={className}
      whileHover={hover ? { scale: 1.02, y: -4, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  )
}
