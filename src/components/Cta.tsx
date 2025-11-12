// import { ctaData } from '@/contants';
// import { motion } from 'framer-motion';
// import { Button } from './ui/button';
// import { ctaBanner } from '@/assets';
// import * as variants from '@/lib/motionVariants';

// const Cta = () => {
//   return (
//     <section className='sectiion'>
//       <div className='container'>

// <motion.div
//   className="bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden
//   grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:items-center"
// >
//   {/* Text Left */}
//   <motion.div
//             variants={variants.fadeInRight}
//             className='p-8 flex flex-col justify-center items-start text-left space-y-6'
//           >
//             <motion.h1
//               variants={variants.fadeInUp}
//               className='text-3xl md:text-4xl font-bold leading-tight'
//             >
//               {ctaData.text}
//             </motion.h1>

//   {/* Image Right */}
//   <motion.figure className="lg:order-2 order-1">
//     <img
//       src={ctaBanner}
//       alt="CTA Banner"
//       className="w-full h-auto object-cover"
//     />
//   </motion.figure>
// </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Cta;

import { ctaData } from '@/contants';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ctaBanner } from '@/assets';
import * as variants from '@/lib/motionVariants';

const Cta = () => {
  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          className='bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden
          grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:items-center'
        >
          {/* Text Left */}
          <motion.div
            variants={variants.fadeInRight}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='p-8 flex flex-col justify-center items-start text-left space-y-6 lg:order-1 order-2'
          >
            <motion.h1
              variants={variants.fadeInUp}
              className='text-3xl md:text-4xl font-bold leading-tight text-white'
            >
              {ctaData.text}
            </motion.h1>

            <motion.div
              variants={variants.fadeInUp}
              className='flex gap-4'
            >
              <Button>Free Trial</Button>
              <Button variant='outline'>Pricing & Plan</Button>
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.figure
            variants={variants.fadeInLeft}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='lg:order-2 order-1'
          >
            <img
              src={ctaBanner}
              alt='CTA Banner'
              className='w-full h-auto object-cover'
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
