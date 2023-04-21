//Librerias
import {Routes, Route} from "react-router-dom";

//Componentes 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Home} from './pages/Home';
import { Menu } from "./pages/Menu";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
    </Routes>
    <Routes>
            <Route path="/menu" element={<Menu/>}/>
    </Routes>
    <Routes>
            <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
