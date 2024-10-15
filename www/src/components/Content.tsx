import { toolsAndLibs, works } from "../data"
import ContentBlock from "./ContentBlock"
import { useState } from "react"

const Content = () => {
  const [isAboutRevealed, setAboutRevealed] = useState<boolean>(false)

  return (
    <div className="h-[calc(100vh-8rem)] px-10 w-full max-w-[1420px] m-auto">
      <div className="flex h-full justify-between top-2 gap-32">
        <div className="flex flex-col gap-5 top-10 justify-between pb-10">
          <div className="flex gap-20">
            <ContentBlock title="Инструменты / Библиотеки" list={toolsAndLibs}/>
            <ContentBlock title="Последние работы" list={works}/>
          </div>
          
          <div className="top-2">
            <p className="text-xl ">// Делайте то, что любите</p>
            <h1 className="text-4xl font-medium">То, на что хочется смотреть<br/> <i>снова и снова</i>...</h1>
          </div>
        </div>

        <div className="flex-1 max-w-[800px]">
          <p className="text-neutral-400 top-4">О себе</p>
          <div className={`relative mt-2 ${!isAboutRevealed && 'h-96'} overflow-clip pb-10 text-lg no-scrollbar`}>
            {new Array(16).fill("").map(() => (
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget urna faucibus nibh rutrum eu dictum mauris in. Dui volutpat
                volutpat condimentum sagittis.
                Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
                suspendisse viverra.<br/><br/>
              </p>
            ))}
            
            {!isAboutRevealed  && <div className="text-sm absolute bottom-0 w-full h-20 fade pointer-events-none"></div>}
          </div>
          <button
            onClick={() => setAboutRevealed(true)} 
            className={`bg-white ${isAboutRevealed ? 'hidden' : 'block'} font-medium rounded-full px-5 py-1.5 mt-4 text-black`}>Раскрыть</button>
        </div>
      </div>
    </div>
  )
}

export default Content