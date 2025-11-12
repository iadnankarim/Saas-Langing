import { motion } from 'framer-motion';

import * as variants from '@/lib/motionVariants';
import { overviewData, reviewData } from '@/contants';
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Quote } from 'lucide-react';
// import { featureData, processData } from '@/contants';
// import { processBanner } from '@/assets';

const Review = () => {
  return (
    <section className='session'>
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
            {reviewData.sectionSubtitle}
          </motion.p>

          {/* text-2xl font-semibold */}
          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>

          {/* <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {reviewData}
          </motion.p> */}
        </div>

        <motion.div
          className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
        >
          {reviewData.reviewCard.map(
            ({ title, text, reviewAuthor, date }, index) => (
              <motion.div
                key={index}
                variants={variants.fadeInUp}
              >
                <Card className='relative'>
                  <CardHeader>
                    <CardTitle className='text-lg'>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {text}
                    </p>
                  </CardContent>
                  <CardFooter className='block'>
                    <p>{reviewAuthor}</p>

                    <p className='text-sm text-muted-foreground'>{date}</p>
                  </CardFooter>

                  <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                    <Quote size={80} />
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
