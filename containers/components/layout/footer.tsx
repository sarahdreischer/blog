import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "../../styles/footer.module.css";

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.fontSize}>
      <Container className="flex-column justify-content-center text-center text-secondary py-2">
        <Copyright />
        <InternalLinks />
      </Container>
    </footer>
  );
};

const Copyright = () => {
  return (
    <div>
      Copyright ©{" "}
      <Link as="/" href="/">
        <a className="text-secondary">Software With Sarah</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
};

const InternalLinks = () => {
  return (
    <span>
      <Link as="/about" href="/about">
        <a className="text-secondary">Contact</a>
      </Link>{" "}
      |{" "}
      <Link as="/terms" href="/terms">
        <a className="text-secondary">Terms</a>
      </Link>{" "}
      |{" "}
      <Link as="/privacy" href="/privacy">
        <a className="text-secondary">Privacy</a>
      </Link>{" "}
    </span>
  );
};
