import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
