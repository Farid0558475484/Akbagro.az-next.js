import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import s from "./../../styles/Products.module.scss";
import { cards } from "./../api/cards";

function Products() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        {cards.map((card, index) => (
          <Col xl="3" xs="6" key={index}  className={s.cardCol}>
            <Card className={s.card}>
              <Image
                src={card.imageSrc}
                alt="Logo"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                priority
                blurDataURL='data:{card.imageSrc};base64,[base64-encoded-placeholder-image]'
              
              />
              <Card.Body className={s.cardBody}>
                <Card.Title className={s.cardBody}>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
