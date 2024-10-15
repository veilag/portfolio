const Content = () => {
  return (
    <div className="h-[calc(100vh-8rem)] px-10">
      <div className="flex h-full justify-between gap-32">
        <div className="flex flex-col gap-5 justify-between pb-10">
          <div className="flex gap-20">
            <div className="relative max-w-72">
              <div className="absolute bottom-0 w-full h-20 fade pointer-events-none"></div>
              <p className="text-neutral-400">Инструменты / Библиотеки</p>
              <ul className="flex flex-col gap-4 mt-2 h-[calc(100vh-8rem-200px)] pb-12 no-scrollbar overflow-scroll">
                <li>
                  <a className="text-lg" href="#">Type Script</a>
                </li>
                <li>
                  <a className="text-lg" href="#">ReactJS</a>
                  <p className="text-neutral-300">Фронтенд библиотека</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Zustand</a>
                  <p className="text-neutral-300">Минималистичный менеджер состояния</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Jotai</a>
                  <p className="text-neutral-300">Атомы, как хранилище состояний</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Framer Motion</a>
                  <p className="text-neutral-300">Декларативная библиотека для анимаций</p>
                </li>
                <li>
                  <a className="text-lg" href="#">React Spring</a>
                  <p className="text-neutral-300">Легковесная библиотека для анимаций</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Tailwind CSS</a>
                  <p className="text-neutral-300">CSS фреймворк</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Python</a>
                </li>
                <li>
                  <a className="text-lg" href="#">Fast API</a>
                  <p className="text-neutral-300">Библиотека для создания API</p>
                </li>
                <li>
                  <a className="text-lg" href="#">SQL Alchemy</a>
                  <p className="text-neutral-300">ORM библиотека</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute bottom-0 w-full h-20 fade pointer-events-none"></div>
              <p className="text-neutral-400">Последние работы</p>
              <ul className="flex flex-col gap-4 mt-2 h-[calc(100vh-8rem-200px)] no-scrollbar overflow-scroll">
                <li className="hover:-translate-y-1 cursor-pointer transition">
                  <a className="text-lg" href="#">Box Package</a>
                  <p className="text-neutral-300">CLI для работы с пакетами</p>
                </li>
                <li>
                  <a className="text-lg" href="#">BizzAI</a>
                  <p className="text-neutral-300">Описание проекта</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Voca Whisper Bot</a>
                  <p className="text-neutral-300">Описание проекта</p>
                </li>
                <li>
                  <a className="text-lg" href="#">Template Station</a>
                  <p className="text-neutral-300">Описание проекта</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-xl">// Делайте то, что любите</p>
            <h1 className="text-4xl font-medium">То, на что хочется смотреть<br/> <i>снова и снова</i>...</h1>
          </div>
        </div>
        <div className="flex-1 max-w-[800px] relative">
          <div className="absolute bottom-0 w-full h-20 mb-10 fade pointer-events-none"></div>
          <p className="text-neutral-400">О себе</p>
          <div className="mt-2 h-[calc(100vh-8rem-80px)] overflow-scroll pb-10 text-lg no-scrollbar">
            Lorem ipsum dolor sit amet consectetur. Eget urna faucibus nibh rutrum eu dictum mauris in. Dui volutpat
            volutpat condimentum sagittis.
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
            Egestas eu magna suscipit posuere tristique rutrum lectus purus accumsan. Mi et porta mauris quisque
            suspendisse viverra.<br/><br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content