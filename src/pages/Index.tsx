import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
