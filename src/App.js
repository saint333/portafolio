import Header  from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
/* import Testimonios from "./components/testimonios/Testimonios"; */
/* import Servicios from "./components/servicios/Servicios"; */
import Experiencia from "./components/experiencia/Experiencia";
import About from "./components/about/About";
import Portafolio from "./components/portafolio/Portafolio";
import Contacto from "./components/contacto/Contacto";


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <About />
      <Experiencia />
      {/* <Servicios /> */}
      {/* <Testimonios /> */}
      <Portafolio />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
