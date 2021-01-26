import { Col, Container, Row } from "react-bootstrap";
import { BodyWrapper } from "./components/layout/body-wrapper";
import Image from "next/image";

interface AboutPageProps {}

export const AboutPage = (props: AboutPageProps) => {
  return (
    <BodyWrapper
      main={
        <Container>
          <Row>
            <Col md={4} className="d-flex justify-content-center my-auto">
              <Image
                className="round-img"
                width={250}
                height={250}
                objectFit="cover"
                src="/profile.jpeg"
                alt="Sarah Dreischer"
                priority
              />
            </Col>
            <Col md={8}>
              <h1 className="py-4 justify-content-center text-center">
                About Me
              </h1>
              <p>
                <b className="highlight-color">Hello there!</b> Many thanks for
                taking your time to read my About Page.
              </p>
              <p>
                I'm <b>Sarah Dreischer</b> - a 24 year old Full-Stack Software
                Engineer with an Electronics Engineering background. I'm living
                and working in London, UK since 2014. Through work and personal
                projects I was able to dip my toes into Java SpringBoot,
                Kubernetes, Cloud, DevOps, Angular, React etc. With this Blog
                I'm hoping that I can share with you what I have learned along
                the way.
              </p>
              <p>
                This blog was coded from scratch using Next.JS (a framework
                built on top of React) and is deployed on the <b>Vercel</b>{" "}
                platform. If you have any questions on how I put this blog
                together which I haven't covered in a blog post, feel free to
                reach out to me.
              </p>
              <b className="highlight-color">
                Contact me on softwarewithsarah@gmail.com
              </b>
            </Col>
          </Row>
        </Container>
      }
    />
  );
};
