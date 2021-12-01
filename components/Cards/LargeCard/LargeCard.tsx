import Image from 'next/image';
import cn from 'classnames';
import { Post } from '@types';
import Link from 'next/link';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import styles from './LargeCard.module.scss';
import { ReactElement } from 'react';

interface LargeCardProps {
  post: Post;
}

export function LargeCard({ post }: LargeCardProps) {
  const { datePublished, headerImage, id, readDurationMin, summary, title } = post;
  const relativePublishedDate = moment(datePublished).fromNow();

  function decorateWithLink(children: ReactElement) {
    return (
      <Link as={`/blog/${id}`} href={'/blog/[id]'}>
        <div className='cursor-pointer'>{children}</div>
      </Link>
    );
  }

  return (
    <div className={cn('d-flex p-2', styles.container)}>
      <div className={cn('position-relative', styles.image)}>
        {decorateWithLink(
          <Image src={headerImage} alt='Test' objectFit='cover' layout='fill' priority />,
        )}
      </div>
      <div className={cn('d-flex flex-column pl-3', styles.text)}>
        <div className='small text-black-50 mb-1'>{relativePublishedDate}</div>
        {decorateWithLink(<div className='h5 font-weight-bold'>{title}</div>)}
        <p className={cn('text-black-50 overflow-hidden flex-grow-1', styles.summary)}>
          <TextTruncate line={4} element='span' truncateText='…' text={summary} />
        </p>
        <div className='d-flex justify-content-between'>
          <div className='small text-black-50'>{readDurationMin || 3} Min Read</div>
          {decorateWithLink(<div className='small font-weight-bold'>Read Full &rarr;</div>)}
        </div>
      </div>
    </div>
  );
}
