import './App.css'
import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import DrawContent from './components/DrawContent.tsx';
import {useEffect, useState} from "react";
import Logo from "./components/icons/Logo.tsx";
import {AnimatePresence, motion} from "framer-motion";

function App() {
  const [isSplashDone, setSplashDone] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setSplashDone(true)
    }, 3 * 1000)
  }, [])

  return (
    <div className="w-full h-full">
      <AnimatePresence mode="popLayout">
        {!isSplashDone && (
          <motion.div
            key="logo"
            className="w-full h-full flex justify-center items-center"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
                type: "spring",
              }
            }}
            exit={{
              y: 200,
              opacity: 0,
              transition: {
                ease: "easeIn",
                duration: 0.5
              }
            }}
          >
            <Logo width={100} />
          </motion.div>
        )}

        {isSplashDone && (
        <>
          <DrawContent />
          <Header/>
          <Content/>
        </>
      )}
      </AnimatePresence>
    </div>
  )
}

export default App
