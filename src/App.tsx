import Headers from './components/Headers';
import Hero from './components/Hero';

import Brand from './components/Brand';
import Feature from './components/Feature';
import Process from './components/Process';
import Overview from './components/Overview';

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
      </main>
    </div>
  );
};

export default App;
