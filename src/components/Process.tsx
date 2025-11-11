import { motion } from 'framer-motion';

import * as variants from '@/lib/motionVariants';
import { featureData, processData } from '@/contants';
import { processBanner } from '@/assets';
const Process = () => {
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

        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className=' grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                key={index}
                variants={variants.staggerContainer}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
              >
                <motion.div
                  variants={variants.fadeInScale}
                  className='w-16 h-16 grid place-items-center rounded-full border-foreground/5 border shrink-0'
                >
                  {icon}
                </motion.div>

                <div className='grid gap-2 md:gap-3'>
                  <motion.h3
                    variants={variants.fadeInLeft}
                    className='text-xl lg:text-2xl'
                  >
                    {title}
                  </motion.h3>

                  <motion.p
                    variants={variants.fadeInLeft}
                    className='text-sm text-muted-foreground md:text-base'
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='max-lg:-order-2'>
            <motion.figure
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='mx-auto bg-primary rounded-3xl max-w-[580px] overflow-hidden p-8 !pb-0 lg:p-12 lg:pb-0'
            >
              <img
                src={processBanner}
                width={500}
                height={528}
                alt='process image'
                className='w-full h-full object-contain object-bottom'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
