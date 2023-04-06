import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col >
            <Image
              src="/img9.jpeg"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
