import Brand from '@/components/Brand';
import Headers from './components/Headers';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Headers />

      <main>
        <Hero />
        <Brand />
      </main>
    </div>
  );
};

export default App;
