import React from 'react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { icons, Menu } from 'lucide-react';
import Logo from './logo';
import MobileMenu from './MobileMenu';

const Headers = () => {
  return (
    <header className=' h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between'>
        <Logo />

        <Popover>
          <PopoverTrigger asChild>
            <Button
              className='lg:hidden'
              variant='outline'
              size='icon'
            >
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <MobileMenu />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Headers;
