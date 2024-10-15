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
      <a className="w-full block" href={link}>
        <p className="text-lg">{title}</p>
        {subtitle && (
          <p className="text-neutral-300">{subtitle}</p>
        )}
      </a>
    </motion.li>     
  )
}

export default ListItem
