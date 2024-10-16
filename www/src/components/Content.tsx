import { toolsAndLibs, works } from "../data"
import ContentBlock from "./ContentBlock"
import { useState } from "react"
import {motion} from "framer-motion"
import ImageView from "./ImageView.tsx";


const Content = () => {
  const [isAboutRevealed, setAboutRevealed] = useState<boolean>(false)

  return (
    <div className="min-h-[calc(100vh-8rem)] px-10 w-full max-w-[1420px] m-auto">
      {isAboutRevealed && <div className="fixed left-0 z-10 bottom-0 w-full h-28 fade pointer-events-none"></div>}
      <div className="flex h-full flex-col xl:gap-32 xl:flex-row justify-between top-2">
        <div className="flex flex-col-reverse xl:flex-col gap-5 top-10 justify-start pb-10">
          <div className="flex flex-col sm:flex-row gap-10 xl:gap-12">
            <ContentBlock title="С чем я работаю" list={toolsAndLibs}/>
            <ContentBlock title="Последние работы" list={works}/>
          </div>

          <motion.div
            className="xl:sticky top-4 xl:bg-[#1a1a1a] md:py-4 z-10"
            transition={{
              duration: 1,
              type: "spring",
              delay: 0.5,
            }}
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
          >
            <p className="text-xl ">// Делайте то, что любите</p>
            <h1 className="text-3xl md:text-4xl font-medium">То, на что хочется смотреть<br/> <i>снова и снова</i>...</h1>
          </motion.div>
          {isAboutRevealed && (
            <div className="mt-20 flex-col gap-64 hidden xl:flex">
              <ImageView />
              <ImageView />
            </div>
          )}
        </div>

        <motion.div
          transition={{
            duration: 1,
            type: "spring",
            delay: 0.8,
          }}
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(4px)",
          }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        className="flex-1 max-w-[800px]">
          <p className="text-neutral-400 text-lg font-medium">О себе</p>
          <motion.div
            initial={{
              height: '24rem'
            }}
            animate={{
              height: isAboutRevealed ? '100%' : '24rem'
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut"
            }}

            className={`relative mt-2 overflow-clip pb-10 text-lg no-scrollbar`}>
            {new Array(16).fill("").map(() => (
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget urna faucibus nibh rutrum eu dictum mauris in. Dui volutpat
                volutpat condimentum sagittis.
                Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
                suspendisse viverra.<br/><br/>
              </p>
            ))}
            
            {!isAboutRevealed  && <div className="absolute bottom-0 w-full h-20 fade pointer-events-none"></div>}
          </motion.div>
          <motion.button
            transition={{
              duration: 1,
              type: "spring",
              delay: 1,
            }}
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(4px)",
            }} 
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            onClick={() => setAboutRevealed(true)} 
            className={`bg-white ${isAboutRevealed ? 'hidden' : 'block'} font-medium mb-10 rounded-full px-5 py-1.5 mt-4 text-black`}
          >
            Читать
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Content