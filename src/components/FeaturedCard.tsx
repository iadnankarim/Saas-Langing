// import { frame, motion, useMotionValue } from 'motion/react';

// import * as variants from '@/lib/motionVariants';
// import { useCallback, useRef, useState } from 'react';

// type FeaturedProps = {
//   classes?: string;
//   children?: JSX.ELement;
// };

// const FeaturedCard = ({ classes, children }) => {
//   const glowRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const [showGlow, setGlow] = useState(false);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const handleMouseMove = useCallback((event:MouseEvent) => {
//     const rect = cardRef.current?.getBoundingClientRect();

//     frame.read(()=>{
//       x.set(event.clientX -Number(rect?.left))
//       y.set(event.clientY -Number(rect?.top))

//     })

// })
//   });

//   return (
//     <motion.div
//       variants={variants.staggerContainer}
//       initial='start'
//       whileInView='end'
//       viewport={{ once: true }}
//       className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
//     >
//       <div
//         className='relative isolate bg-card backdrop-blur-md overflow-hidden'
//         onMouseOver={() => setGlow(true)}
//         onMouseOut={() => setGlow(false)}
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//       >
//         {children}
//       </div>

//       {/* border effect */}
//       {/* <motion.div className='absolute -top-[150px] -left-[150px]  rounded-full -z-10 w-[300px] bg-foreground'></motion.div>
//        */}
//       <motion.div
//         className='absolute -top-[150px] -left-[150px] w-[300px] h-[300px] rounded-full -z-10 bg-foreground/40 blur-[50px]'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: Number(showGlow) }}
//         ref={glowRef}
//         style={{ x, y }}
//       ></motion.div>
//     </motion.div>
//   );
// };

// export default FeaturedCard;

import { motion, useMotionValue, frame } from 'motion/react';
import * as variants from '@/lib/motionVariants';
import { useCallback, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type FeaturedProps = {
  classes?: string;
  children?: ReactNode;
};

const FeaturedCard = ({ classes = '', children }: FeaturedProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [showGlow, setGlow] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      frame.read(() => {
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      });
    },
    [x, y]
  );

  return (
    <motion.div
      variants={variants.staggerContainer}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div
        className='relative isolate bg-card backdrop-blur-md overflow-hidden'
        onMouseOver={() => setGlow(true)}
        onMouseOut={() => setGlow(false)}
        onMouseMove={handleMouseMove}
        ref={cardRef}
      >
        {children}
      </div>

      <motion.div
        className='absolute -top-[150px] -left-[150px] w-[300px] h-[300px] rounded-full -z-10 bg-foreground/60 blur-[50px]'
        initial={{ opacity: 0 }}
        animate={{ opacity: showGlow ? 1 : 0 }}
        ref={glowRef}
        style={{ x, y }}
      />
    </motion.div>
  );
};

export default FeaturedCard;
