import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from './ShareButtons.module.scss';

interface ShareButtonsProps {
  title: string;
}

export const ShareButtons = ({ title }: ShareButtonsProps) => {
  const router = useRouter();
  const rawUrl = `https://softwarewithsarah.com${router.asPath}`;
  const parsedUrl = rawUrl.replace(/:/g, '%3A').replace(/\//g, '%2F');
  const parsedTitle = title.replace(/\s/g, '%20');

  const twitterLink = `https://twitter.com/intent/tweet?url=${parsedUrl}&text=${parsedTitle}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${parsedUrl}`;
  const pinterestLink = `http://pinterest.com/pin/create/button/?url=${parsedUrl}&media=&description=${parsedTitle}`;
  const linkedInLink = `http://www.linkedin.com/shareArticle?mini=true&url=${parsedUrl}&title=${parsedTitle}`;

  return (
    <div className='d-flex justify-content-around w-100'>
      <Link href={twitterLink} passHref={true}>
        <a target='_blank' rel='nofollow'>
          <button className={styles.button} aria-label='Twitter Share Button'>
            <TwitterIcon />
          </button>
        </a>
      </Link>
      <Link href={facebookLink} passHref={true}>
        <a target='_blank' rel='nofollow'>
          <button className={styles.button} aria-label='Facebook Share Button'>
            <FacebookIcon />
          </button>
        </a>
      </Link>
      <Link href={pinterestLink} passHref={true}>
        <a target='_blank' rel='nofollow'>
          <button className={styles.button} aria-label='Pinterest Share Button'>
            <PinterestIcon />
          </button>
        </a>
      </Link>
      <Link href={linkedInLink} passHref={true}>
        <a target='_blank' rel='nofollow'>
          <button className={styles.button} aria-label='LinkedIn Share Button'>
            <LinkedInIcon />
          </button>
        </a>
      </Link>
    </div>
  );
};
