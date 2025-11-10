import type { MenuItem } from '@/types';
import React from 'react';
import { Button } from './ui/button';
import { ChevronsUpDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { Separator } from './ui/separator';

type MobileMenuProps = {
  navMenu: MenuItem[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ navMenu }) => {
  return (
    <div>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <div>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant='ghost'
                      className='w-full justify-between'
                    >
                      <span>{label}</span>
                      <ChevronsUpDown className='h-4 w-4' />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <ul className='ml-4 space-y-2 border-l border-l-muted-foreground '>
                      {submenu.map(
                        (
                          { href: childHref, label: childLabel },
                          childIndex
                        ) => (
                          <li key={childIndex}>
                            <Button
                              asChild
                              variant='ghost'
                              className='w-full justify-start text-muted-foreground hover:bg-transparent'
                            >
                              <a href={childHref}>{childLabel}</a>
                            </Button>
                          </li>
                        )
                      )}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ) : (
              <Button
                asChild
                variant='ghost'
                className='w-full justify-start'
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className='my-4' />

      <div className='flex items-center mt-4 gap-2'>
        <Button
          variant='ghost'
          className='w-full'
        >
          SignIn{' '}
        </Button>
        <Button className='w-full'>Signn Out </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
