import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import s from "../styles/Main.module.scss";


function Main() {
  return (
    <>
      <Container fluid className={s.Main}>
        <Row className="mt-5 mb-3">
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
        <Row className={s.mainTop}>
          <Col md="6">
            <p className={s.mainSectionTitle}>
              İnformasiyanı <br />
              gəlirə
              <br /> çeviririk
            </p>
          </Col>
          <Col md="6">
            <Image
              src="/img13.png"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
        {/* <Row>
          <div className="elementor-widget-container">
            <a
              // href="https://en.npcagro.com/soil-scanning-and-analysis/"
              className="elementor-cta"
            >
              <div className="elementor-cta__bg-wrapper">
                <div
                  className="elementor-cta__bg elementor-bg"
                  // style="background-image: url(https://en.npcagro.com/wp-content/uploads/sites/22/2019/08/Untitled-1-2.jpg);"
                ></div>
                <div className="elementor-cta__bg-overlay"></div>
              </div>
              <div className="elementor-cta__content">
                <div className="elementor-content-item elementor-cta__content-item elementor-cta__image elementor-animated-item--grow">
                  <Image
                    src="/img15.jpeg"
                    alt="Logo"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                  />
              
                </div>
              </div>
            </a>
          </div>
        </Row> */}
        <Row className="mt-3 ">
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
              Biz aqrar sahədə fəaliyyət göstərən sahibkarların qazancını
              artırmaq üçün aşağıdakıları təklif edirik:
              <br />
              Beynəlxalq tərəfdaşlarımızla birlikdə yerli fermerlərin inkişafını
              artırmaq;
              <br />
              Davamlı olaraq sahibkarların iş effektivliyini ölçmək və artımını
              təmin etmək;
              <br />
              Onları işlərinin və məhsullarının keyfiyyətlərinin yüksəldilməsinə
              kömək edəcək lazımi dəstəkləyici xidmətlərlə təmin etmək.
              <br />
              Ətraf mühitin çirklənməsini birinci prioritet halına gətirərək
              kənd təsərrüfatını davamlı inkişaf etdirmək üçün elmi və praktik
              təcrübə yaratmaq.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
