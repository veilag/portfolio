import { useState } from "react";
import {SparklesCore} from "./ui/sparkles.tsx";
import {motion} from "framer-motion";

const DrawContent = () => {
  const [glowRevealed, setGlowRevealed] = useState<boolean>(false)

  return (
    <>
      <motion.div
        className="tiles -z-20 -top-1/2 absolute w-full h-full" 
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2
        }}
      />
      <motion.div
        className="h-[2px] absolute top-0 bg-gradient-to-r from-transparent via-white to-transparent left-1/2 transform -translate-x-1/2"
        initial={{
          width: 0
        }}
        animate={{
          width: 400,
        }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 2
        }}
      />

      <div className="md:absolute fixed -z-10 top-[-100px] 2xl:top-[-200px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <motion.div
          className="w-[200px] blur-[100px] h-[200px] 2xl:w-[250px] 2xl:h-[250px] bg-white rounded-full "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 2
          }}
          onAnimationComplete={() => setGlowRevealed(true)}
        />
        {glowRevealed && (
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={50}
            className="md:absolute fixed top-0 w-[300px] h-[300px]"
            particleColor="#FFFFFF"
          />
        )}
      </div>
    </>
  )
}

export default DrawContent
