import {useInView, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const ImageView = () => {
  const [revealed, setRevealed] = useState<boolean>(false)

  const imageRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(imageRef, {
    margin: "0px -300px -300px 0px"
  })

  useEffect(() => {
    if (revealed) return
    if (isInView) setRevealed(true)
  }, [isInView])

  return (
    <motion.div
      ref={imageRef}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.2,
      }}
      initial={{
        opacity: 0,
        y: -100
      }}
      animate={{
        opacity: revealed ? 1 : 0,
        y: revealed ? 0 : -20
      }}
    >
      <div className="w-full h-96 border-neutral-500 border bg-neutral-700 rounded-md"></div>
      <p className="text-lg mt-3">Beautiful title to figure</p>
      <p>Subtitle to figure</p>
    </motion.div>
  )
}

export default ImageView
