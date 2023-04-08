import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import s from "./../../styles/Products.module.scss";

function Products() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col xl="3" xs="6">
          <Card className={s.card}>
            <Image
              src="/p1.webp"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <Card.Body className={s.card}>
              <Card.Title className={s.card}>Kurtağzı çıxış nipeli</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="3" xs="6">
          <Card className={s.card}>
            <Image
              src="/p1.webp"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <Card.Body className={s.card}>
              <Card.Title className={s.card}>PE tee inegal</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="3" xs="6">
          <Card>
            <Image
              src="/p1.webp"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <Card.Body>
              <Card.Title>PE flans adaptor</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="3" xs="6">
          <Card>
            <Image
              src="/p1.webp"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              priority
            />
            <Card.Body>
              <Card.Title>Polietilen borular</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
