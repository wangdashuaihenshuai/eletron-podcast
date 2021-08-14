import type * as React from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/nav-bar'
import MenuBar from './components/menu'

const containerMotion = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
}

function App() {
  return (
    <div tw="h-screen w-screen flex flex-row bg-opacity-60 bg-gray-200">
      <NavBar />
      <motion.div tw="h-full w-full bg-white" {...containerMotion}>
        <MenuBar />
      </motion.div>
    </div>
  )
}

export default App
