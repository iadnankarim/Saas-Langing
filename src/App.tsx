import Headers from './components/Headers';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Headers />

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
