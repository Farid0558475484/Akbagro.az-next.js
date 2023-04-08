import s from "../styles/Servis.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

function Servis() {
  return (
    <>
      <Container>

        <Row  className="mt-3">
          <h2 className={s.serviceTitle}>
          Xidmətlər
          </h2>
        </Row>
        <Row className="mt-3">
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <Image
                  src="/1.webp"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="#">
                    <h4>Damci suvarma sistemleri</h4>
                    <p>
                     AKB Agro
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <Image
                       src="/3.webp"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="#">
                  <h4>Cileme suvarma sistemleri</h4>
                    <p>
                     AKB Agro
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <Image
                  src="/2.webp"
                  alt="Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              <div className={s.cardfoot}>
                <div className={s.tre}>
                  <a href="#">
                  <h4>Ağıllı gübrələmə</h4>
                    <p>
                     AKB Agro
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
       
        </Row>
      </Container>
    </>
  );
}

export default Servis;
