import { posts } from '#site/content';
import { MDXContent } from '@/components/mdx-components';
import { notFound } from 'next/navigation';
import React from 'react';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className='prose dark:prose-invert container max-w-3xl py-6'>
      <h1 className='mb-2'>{post.title}</h1>
      {post.description ? (
        <p className='text-xl text-muted-foreground'>{post.description}</p>
      ) : null}
      <hr className='my-4' />
      <MDXContent code={post.body} />
    </article>
  );
}