import { motion } from 'framer-motion';

import * as variants from '@/lib/motionVariants';
import { overviewData } from '@/contants';
import { overviewBanner } from '@/assets';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
const Overview = () => {
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
            {overviewData.sectionSubtitle}
          </motion.p>

          {/* text-2xl font-semibold */}
          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>

        <div>
          <motion.div className='relative max-w-4xl mx-auto shadow-xl'>
            <figure>
              <img
                src={overviewBanner}
                width={900}
                height={601}
                alt=''
              />
            </figure>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
                >
                  {/* <div className='src-only'>Play video</div> */}
                  <Play
                    fill='#fff'
                    size={50}
                  />
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

            {/* <Button
              variant='secondary'
              size='icon'
              className=''
            >
              <div className='src-only'>Play video</div>
              <Play
                fill='#fff'
                size={50}
              />
            </Button> */}
          </motion.div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr, 2.5fr] xl:items-center'>
            <motion.p className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'>
              {overviewData.listTitle}
            </motion.p>

            <motion.div className='flex  flex-wrap justify-center gap-5 md:gap-10 xl:gap-8 '>
              {overviewData.list.map(({ title, text }, index) => (
                <div key={index}>
                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
