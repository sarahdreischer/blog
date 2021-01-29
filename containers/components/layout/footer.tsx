import {
  Container,
  Typography,
  Link as MaterialUILink,
} from "@material-ui/core";
import Link from "next/link";

interface FooterProps {}

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link as="/" href="/">
        <MaterialUILink color="inherit">Software With Sarah</MaterialUILink>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Contact = (props) => {
  return (
    <>
      <Link as="/about" href="/about">
        <MaterialUILink color="inherit">Contact me</MaterialUILink>
      </Link>{" "}
      for any questions or suggestions.
    </>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <footer>
      <Container maxWidth="lg" className="py-2">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <Contact />
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
