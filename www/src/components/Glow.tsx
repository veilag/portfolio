import {SparklesCore} from "./ui/sparkles.tsx";
import {motion} from "framer-motion";

const Glow = () => {
  return (
    <>
      <motion.div
        className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-1/2 transform -translate-x-1/2"
        initial={{
          width: 0
        }}
        animate={{
          width: 400
        }}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 2
        }}
      />
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <motion.div
          className="w-[200px] h-[200px] bg-white rounded-full blur-[120px]"
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
        />
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="absolute top-0 w-[300px] h-[300px]"
          particleColor="#FFFFFF"
        />
      </div>
    </>
  )
}

export default Glow
