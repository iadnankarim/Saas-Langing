import { brands } from '@/assets';
import { motion } from 'motion/react';
import * as variants from '@/lib/motionVariants';

const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={variants.fadeInUp}
          className='text-center mb-4 md:md-6'
        >
          powering data insight for today startup and tomorrow leader
        </motion.p>
      </div>

      <motion.div className='flex justify-center flex-wrap md:gap-10'>
        {brands.map((brand, index) => (
          <figure key={index}>
            <img
              src={brand}
              className='opacity-[0.6]'
            />
          </figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Brand;
