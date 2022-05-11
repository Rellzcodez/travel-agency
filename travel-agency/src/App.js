import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Language from './components/Language/Language';
import Support from './components/Support/Support';
import Sign from './components/Sign/Sign';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/language" element={<Language />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/sign" element={<Sign />}></Route>


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App