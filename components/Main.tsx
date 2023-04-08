import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import s from "../styles/Main.module.scss";

function Main() {
  return (
    <>
      <Container className={s.Main}>
        <Row>
          <Col md="6">
            <div className={s.content}>
              <h1 className={s.title}>“AKB Agro-ya xoş gəldiniz!</h1>

              <p className={s.text}>
                “AKB Agro” şirkəti 2023-ci ildə yaradılmışdır. Şirkətimiz
                peşəkar işçiləri ilə sektorda keyfiyyət, peşəkar iş intizamı,
                yüksək effektivlik anlayışı və müştəri məmnuniyyətini başlıca
                vəzifə kimi rəhbər tutaraq fəaliyyətini davam etdirir.
              </p>
              <p className={s.text}>
                Biz “AKB Agro şirkəti olaraq hər növ suvarma sistemlərinin
                satışını, bağlara, villalara və əkin sahələrinə son texnologiya
                ilə çəkilməsini həyata keçiririk. Yeni başladığımız illərdən
                indiyə qədər təcrübəli işçilərimiz sayəsində bir çox layihələrə
                uğurla imza atmışıq. Biz müştərilərərimizə satdığımız
                məhsulların keyfiyyətinə hər zəmən diqqət edirik.
              </p>
            </div>
          </Col>

          <Col md="6">
            <Image
              src="/img7.jpeg"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6" className={s.order2}>
            <Image
              src="/img6.jpeg"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6" className={s.order1}>
            <h1 className={s.title}>Şirkətin missiyası</h1>

            <p className={s.text}>
              Şirkətin əsas missiyası – suya qənaət, məhsuldarlıq və
              rentabelliyi artırmaq məqsədi ilə kənd təsərrüfatı və
              yaşıllaşdırma sahəsində intensiv suvarma metodlarının tətbiqi, su
              resurslarından istifadənin optimallaşdırılması və suvarma
              sistemlərinin idarə edilməsinin avtomatlaşdırılmasıdır.
            </p>
          </Col>
        </Row>
    
    
      </Container>
    </>
  );
}

export default Main;
