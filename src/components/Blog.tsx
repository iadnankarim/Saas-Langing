import { motion } from 'framer-motion';

import * as variants from '@/lib/motionVariants';
import { blogData } from '@/contants';

import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Badge } from '@/components/ui/badge';

const Blog = () => {
  return (
    <div className='section'>
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
            {blogData.sectionSubtitle}
          </motion.p>

          {/* text-2xl font-semibold */}
          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>

          {/* <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {blogData}
          </motion.p> */}
        </div>

        {/* <motion.div>
          {blogData.blogs.map(
            (
              {
                imgSrc,
                badge,
                title,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <motion.div key={title || index}>
                <Card>
                  <CardHeader>
                    <figure>
                      <img
                        src={imgSrc}
                        alt={title}
                        className=''
                      />
                    </figure>
                  </CardHeader>
                  <CardContent>
                    <Badge className=''>{badge}</Badge>

                    <CardTitle className=''>
                      <a href='#'>{title}</a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className=''>
                    <Avatar>
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>

                    <div className=''>
                      <p>{authorName}</p>

                      <div>
                        <time
                          dateTime={publishDate}
                          className=''
                        >
                          {publishDate}
                        </time>

                        <span className=''></span>

                        <p>{readingTime}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div> */}
        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {blogData.blogs.map(
            (
              {
                imgSrc,
                badge,
                title,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <motion.div
                key={title || index}
                variants={variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                <Card className=' group flex flex-col overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <CardHeader className='p-0'>
                    <figure>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-150'
                      />
                    </figure>
                  </CardHeader>

                  <CardContent className='p-5 flex flex-col gap-3'>
                    <Badge className='bg-blue-100 text-blue-800 w-max'>
                      {badge}
                    </Badge>

                    <CardTitle className='text-lg font-semibold hover:text-blue-600 transition-colors'>
                      <a href='#'>{title}</a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className='flex items-center justify-between p-5 border-t border-gray-200 dark:border-gray-700'>
                    <div className='flex items-center gap-3'>
                      <Avatar>
                        <AvatarImage src={avatarSrc} />
                        <AvatarFallback>{authorName[0]}</AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col text-sm'>
                        <p className='font-medium'>{authorName}</p>
                        <time
                          dateTime={publishDate}
                          className='text-gray-500 dark:text-gray-400 text-xs'
                        >
                          {publishDate} • {readingTime}
                        </time>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
