import type * as React from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/nav-bar'
import ListenNow from './page/listen-now'

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
    <div tw="h-screen w-screen flex flex-row bg-opacity-40 bg-gray-200">
      <NavBar />
      <motion.div tw="bg-white  flex-grow overflow-hidden" {...containerMotion}>
        <ListenNow />
      </motion.div>
    </div>
  )
}

export default App
