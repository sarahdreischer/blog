import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Toolbar } from '@mui/material';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <Toolbar className='d-flex justify-content-between w-100 pt-1'>
      <Link as='/' href='/'>
        <div className={cn('h4 cursor-pointer', styles.logo)}>
          Software
          <br />
          With
          <br />
          Sarah
        </div>
      </Link>
      <div className={cn('d-flex', styles.socialMedia)}>
        <div className={styles.link}>
          <Link href='https://www.instagram.com/softwarewithsarah/' passHref={true}>
            <a href='' target='_blank' rel='nofollow'>
              <InstagramIcon />
            </a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href='https://www.linkedin.com/in/sarah-dreischer-2878a4107' passHref={true}>
            <a href='' target='_blank' rel='nofollow'>
              <LinkedInIcon />
            </a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href='https://github.com/sarahdreischer' passHref={true}>
            <a href='' target='_blank' rel='nofollow'>
              <GitHubIcon />
            </a>
          </Link>
        </div>
      </div>
    </Toolbar>
  );
}
