import './App.css';
import Hero from './sections/Hero';
import FAQ from './sections/FAQ';
import BookDemo from './sections/BookDemo';
import PurpleLogo from './sections/PurpleLogo';
import Methodology from './sections/Methodology';
import ChooseUs from './sections/WhyChooseUs';
import WhoFor from './sections/WhoFor';
import Team from './sections/Team';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <PurpleLogo />
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
 