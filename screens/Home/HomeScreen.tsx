import { Body, CustomPagination, LargeCard, PostSummaries } from '@components';
import { Divider } from '@mui/material';
import { Post } from '@types';
import Image from 'next/image';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import cn from 'classnames';
import styles from './HomeScreen.module.scss';

interface HomeScreenProps {
  posts: Array<Post>;
  activePage: number;
  numberOfPages: number;
}

export const HomeScreen = ({
  posts,
  activePage,
  numberOfPages: maxNumberOfPages,
}: HomeScreenProps) => {
  return (
    <>
      <div className={cn('d-flex', styles.featuredContainer)}>
        <LargeCard post={posts[0]} />
      </div>
      <Divider />
      <PostSummaries posts={posts} />
      <Row className='float-right mr-1'>
        <CustomPagination activePage={activePage} maxNumber={maxNumberOfPages} visibleRange={5} />
      </Row>
    </>
  );
};
