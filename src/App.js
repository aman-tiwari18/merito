import About from './components/About';
import Bottom from './components/Bottom';
import Footer from './components/Footer';
import Impact from './components/Impact';
import Navbar from './components/Navbar';
import OurBrands from './components/OurBrands';
import PhotoGallery from './components/PhotoGallery';
import SocialInitiatives from './components/SocialInitiatives';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='h-[100vh] '>
      <Navbar/>
      <PhotoGallery/>
      <About/>
      <Impact/>
      <OurBrands/>
      <SocialInitiatives/>
      <Testimonials/>
      <Footer/>
      <Bottom/>
    </div>
  );
}

export default App;
