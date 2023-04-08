import s from "../styles/Servis.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

function Servis() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md="4">
            <div className={s.cardBody}>
              <div className={s.cardImg}>
                <Image
                  src="/1.jpeg"
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
                    <h4>Torpaq skaneri və analizi</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  src="/2.jpeg"
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
                    <h4>İqlim stansiyaları və ağıllı idarəetmə sistemləri</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  src="/3.jpeg"
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
                    <h4>Dəqiq suvarma dizaynı, monitorinqi və SideRoll</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  src="/8.jpeg"
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
                    <h4>Peyk vasitəsilə görüntüləmə NDVİ</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  src="/4.png"
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
                    <h4>İrrometr - Tansiometr</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  src="/7.jpeg"
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
                    <h4>Teejet - sahə yönləndirmə sistemləri</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
