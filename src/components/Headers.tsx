import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { navMenu } from '@/contants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const Headers = () => {
  return (
    <header className='relative z-50 h-16 grid grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex justify-between '>
        <Logo variant='icon' />

        <NavigationMenu className='max-lg:hidden mx-auto'>
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) =>
              submenu ? (
                <NavigationMenuItem key={`${label}-${index}`}>
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                  {submenu && (
                    <NavigationMenuContent>
                      <ul className='grid grid-cols-2 gap-2 p-2 w-[640px]'>
                        {submenu.map(
                          ({ href: subHref, label: subLabel, desc, icon }) => (
                            <li key={subLabel}>
                              <NavigationMenuLink
                                className='flex gap-3 rounded-md p-3 hover:bg-accent'
                                href={subHref}
                              >
                                {icon && (
                                  <span className='mt-1 text-muted-foreground'>
                                    {icon}
                                  </span>
                                )}
                                <span className='space-y-1'>
                                  <span className='block text-sm font-medium leading-none'>
                                    {subLabel}
                                  </span>
                                  {desc && (
                                    <span className='block text-sm text-muted-foreground'>
                                      {desc}
                                    </span>
                                  )}
                                </span>
                              </NavigationMenuLink>
                            </li>
                          )
                        )}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={`${label}-${index}`}>
                  <NavigationMenuLink
                    href={href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-2 max-lg:hidden justify-end'>
          <Button variant='ghost'>Sign In</Button>

          <Button>Free Trail</Button>
        </div>
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
