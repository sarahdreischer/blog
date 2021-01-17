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
                className="round-img about-me-img"
                width={200}
                height={200}
                objectFit="cover"
                layout="fixed"
                src="/profile.jpeg"
              />
            </Col>
            <Col md={8}>
              <h1 className="py-4 justify-content-center text-center">
                About Me
              </h1>
              <p className="text-justify">
                Hi - thank you very much for visiting my blog! I'm Sarah
                Dreischer, a 24 year old Software Engineer living and working in
                London, UK. I graduated with an Electrical and Electronics
                Engineering degree from University College London in 2018 and
                have since then worked as an Electrical Engineer and Software
                Engineer. Through work and personal projects I was able to dip
                my toes into Java SpringBoot, Kubernetes, Cloud, DevOps,
                Angular, React and NodeJS.
                <br />
                <br />
                This blog was coded from scratch using React for the front-end
                and NodeJs for the backend. The majority of the blog services
                are hosted on Kubernetes in the Cloud. If you have any questions
                on how I put this blog together which I haven't covered in a
                blog post - feel free to reach out to me.
                <br />
                <br />
                <b>Email:</b> softwarewithsarah@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      }
    />
  );
};
