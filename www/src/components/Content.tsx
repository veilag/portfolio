import { toolsAndLibs, works } from "../data"
import ContentBlock from "./ContentBlock"
import { useState } from "react"
import {motion} from "framer-motion"

const Content = () => {
  const [isAboutRevealed, setAboutRevealed] = useState<boolean>(false)

  return (
    <div className="min-h-[calc(100vh-8rem)] px-10 w-full max-w-[1420px] m-auto">
      {isAboutRevealed && <div className="fixed left-0 z-10 bottom-0 w-full h-28 fade pointer-events-none"></div>}
      <div className="flex h-full justify-between top-2 gap-32">
        <div className="flex flex-col gap-5 top-10 justify-start pb-10">
          <div className="flex gap-20">
            <ContentBlock title="Инструменты / Библиотеки" list={toolsAndLibs}/>
            <ContentBlock title="Последние работы" list={works}/>
          </div>
          
          <motion.div
            className="sticky top-8"
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
            <h1 className="text-4xl font-medium">То, на что хочется смотреть<br/> <i>снова и снова</i>...</h1>
          </motion.div>
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
          <p className="text-neutral-400 top-4">О себе</p>
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
            className={`bg-white ${isAboutRevealed ? 'hidden' : 'block'} font-medium rounded-full px-5 py-1.5 mt-4 text-black`}
          >
            Читать
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Content