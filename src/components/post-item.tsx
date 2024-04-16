import { Calendar } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { cn, formatDate } from '@/lib/utils';

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className='flex flex-col gap-2 border-b border-border py-3'>
      <h2 className='text-2xl font-bold'>
        <Link href={slug}>{title}</Link>
      </h2>
      <div className='max-w-none text-muted-foreground'>{description}</div>
      <div className='flex items-center justify-between'>
        <dl>
          <dt className='sr-only'>Published On</dt>
          <dd className='flex items-center gap-1 text-sm font-medium sm:text-base'>
            <Calendar className='h-4 w-4' />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
