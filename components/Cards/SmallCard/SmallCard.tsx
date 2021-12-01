import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Post } from '@types';
import Link from 'next/link';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import styles from './SmallCard.module.scss';

interface SmallCardProps {
  post: Post;
  className?: string;
}

export function SmallCard({ post, className }: SmallCardProps) {
  const { datePublished, headerImage, id, readDurationMin, summary, title } = post;
  const relativePublishedDate = moment(datePublished).fromNow();

  return (
    <div className={cn('h-100 p-2', styles.container, className)}>
      <div className='position-relative'>
        <Image
          className={styles.image}
          src={headerImage}
          alt='Test'
          objectFit='cover'
          layout='fill'
          priority
        />
      </div>
      <div className='d-flex flex-column'>
        <div className={cn('small text-black-50 mb-1', styles.publishDate)}>
          {relativePublishedDate}
        </div>
        <div className='h6 font-weight-bold'>{title}</div>
        <p className={cn('small text-black-50 overflow-hidden flex-grow-1', styles.summary)}>
          <TextTruncate line={2} element='span' truncateText='…' text={summary} />
        </p>
        <div className='d-flex justify-content-between'>
          <div className='small text-black-50'>{readDurationMin || 3} Min Read</div>
          <Link as={`/blog/${id}`} href={'/blog/[id]'}>
            <div className='small font-weight-bold cursor-pointer'>Read Full &rarr;</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
