// import { heroData } from '@/contants';
// import { Button } from './ui/button';
// import { heroBanner } from '@/assets';
// import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
// import { CirclePlay } from 'lucide-react';
// import { AspectRatio } from './ui/aspect-ratio';
// import {
//   motion,
//   scale,
//   useScroll,
//   useSpring,
//   useTransform,
//   type Variants,
// } from 'motion/react';
// import { useRef } from 'react';

// const heriVariant: Variants = {
//   start: {},
//   end: {
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };
// const heroChildVariant: Variants = {
//   start: {
//     y: 30,
//     opacity: 0,
//     filter: 'blur(5px)',
//   },
//   end: {
//     y: 0,
//     opacity: 1,
//     filter: 'blur(0)',
//     transition: {
//       duration: 0.7,
//       ease: 'easeInOut',
//     },
//   },
// };

// const Hero = () => {
//   const heroBannerRef = useRef<HTMLElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: heroBannerRef,
//     offset: ['start 1080px', '50% start'],
//   });

//   const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

//   const scale = useSpring(scrollYTransform, {
//     stiffness: 300,
//     damping: 30,
//     restDelta: 0.001,
//   });
//   return (
//     <section className='relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-background/40 py-16 md:py-24'>
//       <div className='pointer-events-none absolute inset-0 mx-auto max-w-4xl rounded-full bg-primary/10 blur-3xl' />

//       <motion.div
//         variants={heriVariant}
//         initial='start'
//         animate='end'
//         className='container relative z-0'
//       >
//         <div className='mx-auto max-w-3xl text-center'>
//           <motion.p
//             variants={heroChildVariant}
//             initial='start'
//             animate='end'
//             className='  inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur'
//           >
//             <span className='inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_2px_rgba(59,130,246,0.15)]' />
//             {heroData.sectionSubtitle}
//           </motion.p>

//           <motion.h1
//             variants={heroChildVariant}
//             className='mt-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl'
//           >
//             {heroData.sectionTitle}{' '}
//             <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
//               {heroData.decoTitle}
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={heroChildVariant}
//             className='mt-4 text-base text-muted-foreground md:mt-6 md:text-lg'
//           >
//             {heroData.sectionText}
//           </motion.p>

//           <motion.div
//             variants={heroChildVariant}
//             className='mt-8 flex flex-wrap items-center justify-center gap-4'
//           >
//             <Button
//               size='lg'
//               className='px-6'
//             >
//               Free Trial
//             </Button>

//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button
//                   variant='outline'
//                   size='lg'
//                   className='px-6'
//                 >
//                   <CirclePlay /> Watch Demo
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className='max-w-[640px] xl:max-w-[1000px] p-0'>
//                 <AspectRatio
//                   ratio={16 / 9}
//                   className='relative overflow-hidden rounded-lg bg-black'
//                 >
//                   <iframe
//                     className='absolute inset-0 w-full h-full'
//                     src='https://www.youtube.com/embed/fK_bm84N7bs?autoplay=0&rel=0&modestbranding=1'
//                     title='YouTube video player'
//                     allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//                     allowFullScreen
//                     style={{ border: 'none' }}
//                   />
//                 </AspectRatio>
//               </DialogContent>
//             </Dialog>
//           </motion.div>
//         </div>

//         <motion.figure
//           className='mt-12 md:mt-16'
//           initial={{
//             y: 120,
//             opacity: 0,
//             filter: 'blur(5px)',
//           }}
//           animate={{
//             y: 0,
//             opacity: 1,
//             filter: 'blur(0)',
//           }}
//           transition={{
//             duration: 1.5,
//             delay: 0.5,
//             ease: 'backInOut',
//           }}
//           /// <reference path="" />
//         >
//           <div className='relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-3 shadow-xl shadow-primary/10 backdrop-blur-lg md:p-6'>
//             {/* Blurry glow effects behind image */}
//             <motion.div
//               className='pointer-events-none absolute inset-0 -z-0'
//               initial={{
//                 scale: 0.8,
//                 opacity: 0,
//               }}
//               animate={{
//                 scale: 1,
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.5,
//                 ease: 'backInOut',
//               }}
//             >
//               {/* Main glow - center */}
//               <motion.div
//                 className='absolute left-1/2 top-1/2 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[80px] md:blur-[120px]'
//                 initial={{
//                   scale: 0.4,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   scale: 1,
//                   opacity: 1,
//                 }}
//                 transition={{
//                   duration: 2,
//                   delay: 0.5,
//                   ease: 'backInOut',
//                 }}
//               />

//               {/* Secondary glow - top right */}
//               <div className='absolute right-[10%] top-[15%] h-[40%] w-[50%] rounded-full bg-primary/30 blur-[60px] md:blur-[100px]' />

//               {/* Tertiary glow - bottom left */}
//               <div className='absolute bottom-[15%] left-[10%] h-[35%] w-[45%] rounded-full bg-primary/25 blur-[70px] md:blur-[110px]' />

//               {/* Radial gradient overlay */}
//               <div
//                 className='absolute inset-0 opacity-60'
//                 style={{
//                   background:
//                     'radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 50%, transparent 100%)',
//                 }}
//               />
//             </motion.div>

//             <img
//               className='relative z-10 w-full rounded-2xl border border-border/40'
//               src={heroBanner}
//               width={1468}
//               height={815}
//               alt='analytics dashboard preview'
//             />
//           </div>
//         </motion.figure>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import { heroData } from '@/contants';
import { Button } from './ui/button';
import { heroBanner } from '@/assets';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { CirclePlay } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'motion/react';
import { useRef } from 'react';

const heriVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: 'blur(5px)',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  // 👇 Ref to track the image
  const heroBannerRef = useRef<HTMLDivElement>(null);

  // 👇 Observe scroll progress relative to the image
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ['start 1080px', '50% start'], // smooth range
  });

  // 👇 Map scroll progress (0→1) to scale range (0.9→1.1)
  const zoomScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  // 👇 Add spring for smooth animation
  const smoothScale = useSpring(zoomScale, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-background/40 py-16 md:py-24'>
      <div className='pointer-events-none absolute inset-0 mx-auto max-w-4xl rounded-full bg-primary/10 blur-3xl' />

      <motion.div
        variants={heriVariant}
        initial='start'
        animate='end'
        className='container relative z-0'
      >
        <div className='mx-auto max-w-3xl text-center'>
          <motion.p
            variants={heroChildVariant}
            className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 backdrop-blur'
          >
            <span className='inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_2px_rgba(59,130,246,0.15)]' />
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h1
            variants={heroChildVariant}
            className='mt-6 text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl'
          >
            {heroData.sectionTitle}{' '}
            <span className='bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent'>
              {heroData.decoTitle}
            </span>
          </motion.h1>

          <motion.p
            variants={heroChildVariant}
            className='mt-4 text-base text-muted-foreground md:mt-6 md:text-lg'
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVariant}
            className='mt-8 flex flex-wrap items-center justify-center gap-4'
          >
            <Button
              size='lg'
              className='px-6'
            >
              Free Trial
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='outline'
                  size='lg'
                  className='px-6'
                >
                  <CirclePlay /> Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className='max-w-[640px] xl:max-w-[1000px] p-0'>
                <AspectRatio
                  ratio={16 / 9}
                  className='relative overflow-hidden rounded-lg bg-black'
                >
                  <iframe
                    className='absolute inset-0 w-full h-full'
                    src='https://www.youtube.com/embed/fK_bm84N7bs?autoplay=0&rel=0&modestbranding=1'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* 👇 Scroll zoom image section */}
        <motion.figure
          ref={heroBannerRef}
          className='mt-12 md:mt-16 relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-3 shadow-xl shadow-primary/10 backdrop-blur-lg md:p-6'
          style={{ scale: smoothScale }}
        >
          <img
            className='relative z-10 w-full rounded-2xl border border-border/40'
            src={heroBanner}
            width={1468}
            height={815}
            alt='analytics dashboard preview'
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default Hero;
