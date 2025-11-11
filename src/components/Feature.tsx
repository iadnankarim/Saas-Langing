import { featureData } from '@/contants';
// import { motion } from 'motion/react';
import { motion } from 'framer-motion';

import FeaturedCard from './FeaturedCard';
import { Button } from './ui/button';
import { ArrowRightLeft } from 'lucide-react';

// import * as variants from '../lib/motionVariants';
import * as variants from '@/lib/motionVariants';

const Feature = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head '>
          {/* text-muted-foreground mb-2 */}

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {featureData.sectionSubtitle}
          </motion.p>

          {/* text-2xl font-semibold */}
          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {featureData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {featureData.sectionText}
          </motion.p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6'>
          {featureData.features.map(
            ({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
              <FeaturedCard
                key={index}
                classes={
                  index < 2
                    ? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
                    : 'xl:col-span-2'
                }
              >
                <>
                  <div className='p-8'>
                    <motion.div
                      variants={variants.fadeInUp}
                      className={`w-16 h-16 grid place-items-center rounded-full  flex-shrink-0 ${iconBoxColor}`}
                    >
                      {icon}{' '}
                    </motion.div>

                    <motion.h3
                      variants={variants.fadeInUp}
                      className='text-foreground  text-xl  font-mediumm mt-4 mb-3'
                    >
                      {title}
                    </motion.h3>

                    <p className='text-muted-foreground line-clamp-3'>{desc}</p>

                    <motion.div variants={variants.fadeInUp}>
                      <Button
                        variant='link'
                        className='p-0 h-auto mt-3'
                      >
                        Learn More <ArrowRightLeft />
                      </Button>
                    </motion.div>
                  </div>

                  {imgSrc && (
                    <motion.figure
                      variants={variants.fadeInUp}
                      className='p-6 pt-0'
                    >
                      <img src={imgSrc} />
                    </motion.figure>
                  )}
                </>
              </FeaturedCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
