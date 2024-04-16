'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { MobileLink } from './mobile-link';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'
        >
          <Icons.logo className='mr-2 h-2 w-4' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='mt-3 flex flex-col gap-3'>
          <MobileLink
            onOpenChange={setOpen}
            href='/blog'
            className='flex items-center'
          >
            Blog
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href='/about'
            className='flex items-center'
          >
            About
          </MobileLink>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            GitHub
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
