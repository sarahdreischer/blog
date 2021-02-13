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
  const rawUrl: string = `https://softwarewithsarah.com${router.asPath}`;
  const parsedUrl: string = rawUrl
    .replaceAll(":", "%3A")
    .replaceAll("/", "%2F");
  const parsedTitle: string = title.replaceAll(" ", "%20");

  const twitterLink: string = `https://twitter.com/intent/tweet?url=${parsedUrl}&text=${parsedTitle}`;
  const facebookLink: string = `https://www.facebook.com/sharer/sharer.php?u=${parsedUrl}`;
  const pinterestLink: string = `http://pinterest.com/pin/create/button/?url=${parsedUrl}&media=&description=${parsedTitle}`;
  const linkedInLink: string = `http://www.linkedin.com/shareArticle?mini=true&url=${parsedUrl}&title=${parsedTitle}`;

  return (
    <div className="d-flex justify-content-around w-100">
      <Link as={twitterLink} href={twitterLink}>
        <button className={styles.button}>
          <TwitterIcon />
        </button>
      </Link>
      <Link as={facebookLink} href={facebookLink}>
        <button className={styles.button}>
          <FacebookIcon />
        </button>
      </Link>
      <Link as={pinterestLink} href={pinterestLink}>
        <button className={styles.button}>
          <PinterestIcon />
        </button>
      </Link>
      <Link as={linkedInLink} href={linkedInLink}>
        <button className={styles.button}>
          <LinkedInIcon />
        </button>
      </Link>
    </div>
  );
};
