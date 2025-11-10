import React from 'react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { icons, Menu } from 'lucide-react';
import Logo from './logo';
import MobileMenu from './MobileMenu';
import { navMenu } from '@/contants';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const Headers = () => {
  return (
    <header className=' h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between'>
        <Logo />

        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={href}
                  className={navigationMenuTriggerStyle()}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
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
          <PopoverContent className='bg-background/50 backdrop-blur-3xl border-x-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden'>
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Headers;
