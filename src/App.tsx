import Headers from './components/Headers';
import Hero from './components/Hero';

import Brand from './components/Brand';
import Feature from './components/Feature';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Headers />

      <main>
        <Hero />
        <Brand />
        <Feature />
      </main>
    </div>
  );
};

export default App;
