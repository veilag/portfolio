import './App.css'
import Header from "./components/Header.tsx";
import Glow from "./components/Glow.tsx";
import Content from "./components/Content.tsx";
import {motion} from "framer-motion";

function App() {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2
        }}
        className="tiles -z-10 -top-1/2 absolute w-full h-full"></motion.div>

      <Glow/>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
