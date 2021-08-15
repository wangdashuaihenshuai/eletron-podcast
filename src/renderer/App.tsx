import type * as React from 'react'
import { motion } from 'framer-motion'
import NavBar from './components/nav-bar'
import ListenNow from './page/listen-now'

function App() {
  return (
    <div tw="h-screen w-screen flex flex-row bg-opacity-40 bg-gray-200">
      <NavBar />
      <div tw="bg-white  flex-grow overflow-hidden">
        <ListenNow />
      </div>
    </div>
  )
}

export default App
