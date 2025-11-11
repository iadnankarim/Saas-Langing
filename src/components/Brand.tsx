// jab mai variants use kkrta hn tab screen per show ni kkrta hai

import { brands } from '@/assets';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';

// import * as variants from '../lib/motionVariants';

const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          initial={{ opacity: 0, transform: 'translateY(20px)' }}
          transition={{ duration: 0.6 }}
          className='text-center mb-4 md:md-6'
        >
          powering data insight for today startup and tomorrow leader
        </motion.p>
      </div>

      <motion.div className='flex justify-center flex-wrap gap-5 md:gap-10'>
        {brands.map((brand, index) => (
          <motion.figure
            key={index}
            // variants={variants.staggerContainer}
            // initial='start'
            // whileInView='end'
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            transition={{ duration: 1.9 }}
            className='text-center mb-4 md:md-6'
          >
            <img
              src={brand}
              className='opacity-[0.6]'
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Brand;
