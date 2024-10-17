import './App.css'
import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import DrawContent from './components/DrawContent.tsx';

function App() {
  return (
    <div>
      <DrawContent />
      <Header/>
      <Content/>
    </div>
  )
}

export default App
