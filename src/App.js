//Librerias
import {Routes, Route} from "react-router-dom";

//Componentes 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Home} from './pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
