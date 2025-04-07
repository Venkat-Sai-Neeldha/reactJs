import './App.css'
import Nav from './components/Nav'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousals from './components/Carousals';
import Image from './components/Image';
import Tabdiv from './components/Tabdiv';
function App() {
 

  return (
    <>
    <div id='sticky'>
    <Nav/>
    </div>
    <Carousals/>
      <Image/>
      <div id='four'>Tailored For Your Occassion</div>
      <Tabdiv/>
    </>
  )
}

export default App
