import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact"; 
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
