import './App.css';
import Hero from './sections/Hero';
import FAQ from './sections/FAQ';
import BookDemo from './sections/BookDemo';
import Methodology from './sections/Methodology';
import ChooseUs from './sections/WhyChooseUs';
import WhoFor from './sections/WhoFor';
import Team from './sections/Team';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <Methodology />
      <WhoFor />
      <Team />
      <FAQ />
      <BookDemo />
      <Footer />
    </div>
  );
}

export default App;
 