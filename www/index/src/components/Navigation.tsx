import {motion} from "framer-motion";

const Navigation = () => {
  return (
    <>
      <motion.div
        className="absolute h-1 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        transition={{delay: 1}}
        animate={{
          width: [0, "10px", "100%"],
          height: [0, "10px", "2px"]
        }}
      ></motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 35 }}
        transition={{
          delay: 2,
        }}
        className="bg-white text-black overflow-clip flex justify-center items-center z-10"
      >
        <nav>
          <ul className="uppercase flex font-medium gap-10">
            <li><a href="#">о себе</a></li>
            <li><a href="#">портфолио</a></li>
            <li><a href="#">блог</a></li>
          </ul>
        </nav>
      </motion.div>
    </>
  )
}

export default Navigation