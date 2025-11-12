import { motion } from 'framer-motion';
import { footerData } from '@/contants';
import * as variants from '@/lib/motionVariants';

const Footer = () => {
  return (
    <footer className='relative bg-black text-gray-300 pt-20 pb-10 mt-24 overflow-hidden'>
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent pointer-events-none'></div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Footer Grid */}
        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mb-14'
        >
          {footerData.links.map(({ title, items }, i) => (
            <motion.div
              key={i}
              variants={variants.fadeInUp}
              className='space-y-4'
            >
              <h4 className='font-semibold text-white text-lg border-l-2 border-blue-500 pl-3'>
                {title}
              </h4>
              <ul className='space-y-2 text-sm'>
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className='hover:text-blue-400 transition-all duration-300 relative group'
                    >
                      {label}
                      <span className='absolute left-0 bottom-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300'></span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={variants.fadeInScale}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='flex items-center justify-center gap-6 mb-10'
        >
          {footerData.socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300'
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='text-center text-sm text-gray-500'
        >
          {footerData.copyright}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
