
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Feature from './Feature';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Footer from './Footer';

function App() {


  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Feature/>
       <Testimonials/>
       <Cta/>
       <Footer/>
    </div>
  );
}

export default App;
