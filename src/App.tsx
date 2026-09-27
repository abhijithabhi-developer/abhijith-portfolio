import Navbar from "./components/navbar/NavBar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/about";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Certifications from "./sections/Certifications/Certifications";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/footer/Footer";
import CoursesCompleted from "./sections/CoursesCompleted/CoursesCompleted";
import Tools from "./sections/Tools/Tools";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
<Tools/>
      <Projects/>
      <Experience/>
      <CoursesCompleted/>
      <Certifications/>
      <Education/>
      <Contact/>
   <Footer/>
   
    </main>
  );
}

export default App;