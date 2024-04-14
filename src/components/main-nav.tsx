'use client';

import Link from 'next/link';
import React from 'react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/blog'
        className={cn(
          'hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
      <Link
        href='/about'
        className={cn(
          'hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        About
      </Link>
    </div>
  );
}
