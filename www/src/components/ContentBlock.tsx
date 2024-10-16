import { ListItemType } from "../data"
import ListItem from "./ListItem"
import {motion} from "framer-motion"

interface ContentBlockProps {
  title: string
  list: ListItemType[]
}

const ContentBlock = ({ list, title }: ContentBlockProps) => {
  return (
    <motion.div
    initial={{
      opacity: 0,
      filter: "blur(2px)",
    }} 
    animate={{
      opacity: 1,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 1,
      ease: "easeOut"
    }}
    className="relative">
      <div className="z-10 hidden xl:block absolute bottom-0 w-full h-20 fade pointer-events-none"></div>
      <p className="text-neutral-400 text-lg font-medium">{title}</p>
      <ul className="flex md:w-72 w-full flex-col items-center gap-3 mt-2 xl:max-h-[calc(100vh-8rem-220px)] pb-14 no-scrollbar overflow-scroll">
        {list.map((item, index) => (
          <ListItem
            id={index}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </ul>
    </motion.div>
  )
}

export default ContentBlock