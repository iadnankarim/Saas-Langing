import Headers from './components/Headers';
import Hero from './components/Hero';

import Brand from './components/Brand';
import Feature from './components/Feature';
import Process from './components/Process';
import Overview from './components/Overview';
import Review from './components/Review';
import Blog from './components/Blog';
import Cta from './components/cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Headers />

      <main>
        <Hero />
        <Brand />
        <Feature />
        <Process />
        <Overview />
        <Review />
        <Blog />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default App;
