import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./share-buttons.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface ShareButtonsProps {
  title: string;
}

export const ShareButtons = ({ title }: ShareButtonsProps) => {
  const router = useRouter();
  const rawUrl = `https://softwarewithsarah.com${router.asPath}`;
  const parsedUrl = rawUrl.replace(/:/g, "%3A").replace(/\//g, "%2F");
  const parsedTitle = title.replace(/\s/g, "%20");

  const twitterLink = `https://twitter.com/intent/tweet?url=${parsedUrl}&text=${parsedTitle}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${parsedUrl}`;
  const pinterestLink = `http://pinterest.com/pin/create/button/?url=${parsedUrl}&media=&description=${parsedTitle}`;
  const linkedInLink = `http://www.linkedin.com/shareArticle?mini=true&url=${parsedUrl}&title=${parsedTitle}`;

  return (
    <div className="d-flex justify-content-around w-100">
      <Link href={twitterLink} passHref={true}>
        <a target="_blank" rel="noreferrer">
          <button className={styles.button} aria-label="Twitter Share Button">
            <TwitterIcon />
          </button>
        </a>
      </Link>
      <Link href={facebookLink} passHref={true}>
        <a target="_blank" rel="noreferrer">
          <button className={styles.button} aria-label="Facebook Share Button">
            <FacebookIcon />
          </button>
        </a>
      </Link>
      <Link href={pinterestLink} passHref={true}>
        <a target="_blank" rel="noreferrer">
          <button className={styles.button} aria-label="Pinterest Share Button">
            <PinterestIcon />
          </button>
        </a>
      </Link>
      <Link href={linkedInLink} passHref={true}>
        <a target="_blank" rel="noreferrer">
          <button className={styles.button} aria-label="LinkedIn Share Button">
            <LinkedInIcon />
          </button>
        </a>
      </Link>
    </div>
  );
};
