import Image from 'next/image';
import cn from 'classnames';
import { Post } from '@types';
import Link from 'next/link';
import styles from './LargeCard.module.scss';

interface LargeCardProps {
  post: Post;
}

export function LargeCard({ post }: LargeCardProps) {
  const { id, headerImage, summary, title } = post;

  return (
    <div className={cn('d-flex p-2', styles.container)}>
      <div className='w-50 position-relative'>
        <Image src={headerImage} alt='Test' objectFit='cover' layout='fill' priority />
      </div>
      <div className='w-50 pl-3'>
        <div className='text-black-50'>1 hour ago</div>
        <div className='h4 font-weight-bold'>{title}</div>
        <p className={cn('text-black-50 overflow-hidden', styles.summary)}>{summary}</p>
        <div className='d-flex justify-content-between'>
          <div className='text-black-50'>3 Min Read</div>
          <Link as={`/blog/${id}`} href={'/blog/[id]'}>
            <div className='font-weight-bold cursor-pointer'>Read Full &rarr;</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
