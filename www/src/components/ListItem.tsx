import {motion} from "framer-motion"

interface ListItemProps {
  id: number,
  title: string
  subtitle?: string
  link: string
}

const ListItem = ({ id, title, subtitle, link }: ListItemProps) => {
  return (
    <motion.li 
    className="block w-full"
      key={id}
      transition={{
        duration: 0.9,
        type: "spring",
        delay: id * 0.08
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
    >
      <a className="w-full backdrop-blur-sm block bg-neutral-700 py-2 px-4 bg-opacity-50 border-opacity-40 rounded-md border border-white" href={link}>
        <p className="font-medium">{title}</p>
        {subtitle && (
          <p className="text-neutral-300 text-sm">{subtitle}</p>
        )}
      </a>
    </motion.li>     
  )
}

export default ListItem
