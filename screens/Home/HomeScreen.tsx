import { LargeCard, SmallCard } from '@components';
import { Post } from '@types';
import cn from 'classnames';
import styles from './HomeScreen.module.scss';

interface HomeScreenProps {
  posts: Array<Post>;
  activePage: number;
  numberOfPages: number;
}

export const HomeScreen = ({ posts, activePage, numberOfPages }: HomeScreenProps) => {
  const topPosts = posts.slice(0).filter((_, i) => i < 3);
  const latestPost = posts[0];

  return (
    <div className={cn('h-100', styles.container)}>
      <div className='d-flex'>
        <LargeCard post={latestPost} />
      </div>
      <div className={styles.posts}>
        {topPosts.map((post) => (
          <SmallCard className='h-100' post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};
