import Logo from "./icons/Logo.tsx";
import TelegramIcon from "./icons/TelegramIcon.tsx";
import GitHubIcon from "./icons/GitHubIcon.tsx";
import {motion} from "framer-motion"


const Header = () => {
  return (
    <motion.header
      className="md:max-w-[1420px] sm:mt-0 flex-wrap m-auto flex px-7 py-10 md:px-10 md:h-32 items-center justify-start gap-6 md:justify-between"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <div className="flex gap-5 md:gap-7">
        <Logo width={60}/>
        
        <div className="mt-[-3px]">
          <h3 className="text-xl leading-5">Галиев Рамиль</h3>
          <p className="cursor-default whitespace-nowrap">веб-программист • дизайнер</p>
        </div>
      </div>

      <div className="flex gap-8 md:gap-12">
        <a href="https://t.me/veilag" className="flex items-center duration-500 gap-3 hover:scale-110 transition-transform">
          <TelegramIcon/>
          <div className="flex flex-col">
            <p className="leading-4">Telegram</p>
            <span className="text-sm">@veilag</span>
          </div>
        </a>
        <a
          href="https://github.com/veilag" 
          className="flex items-center gap-3 hover:scale-110 duration-500 transition-transform"
        >
          <GitHubIcon/>
          <div className="flex flex-col">
            <p className="leading-4">GitHub</p>
            <span className="text-sm">@veilag</span>
          </div>
        </a>
      </div>
    </motion.header>
  )
}

export default Header
