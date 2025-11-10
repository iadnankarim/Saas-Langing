import { heroData } from '@/contants';
import { Button } from './ui/button';
import { heroBanner } from '@/assets';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-background/40 py-16 md:py-24'>
      <div className='pointer-events-none absolute inset-0 mx-auto max-w-4xl rounded-full bg-primary/10 blur-3xl' />

      <div className='container relative z-10'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='  inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur'>
            <span className='inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_2px_rgba(59,130,246,0.15)]' />
            {heroData.sectionSubtitle}
          </p>

          <h1 className='mt-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl'>
            {heroData.sectionTitle}{' '}
            <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
              {heroData.decoTitle}
            </span>
          </h1>

          <p className='mt-4 text-base text-muted-foreground md:mt-6 md:text-lg'>
            {heroData.sectionText}
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Button
              size='lg'
              className='px-6'
            >
              Free Trial
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='px-6'
            >
              Watch Demo
            </Button>
          </div>
        </div>

        <figure className='mt-12 md:mt-16'>
          <div className='relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-3 shadow-xl shadow-primary/10 backdrop-blur-lg md:p-6'>
            <div className='pointer-events-none absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-80' />
            <img
              className='relative z-10 w-full rounded-2xl border border-border/40'
              src={heroBanner}
              width={1468}
              height={815}
              alt='analytics dashboard preview'
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
