import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import s from "../styles/About.module.scss";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <div className={s.content}>
              <h1 className={s.title}>Akb Agro-ya xoş gəldiniz!</h1>

              <p className={s.text}>
                “Akb Agro” şirkəti 2023-ci ildə yaradılmışdır. Şirkətimiz
                peşəkar işçiləri ilə sektorda keyfiyyət, peşəkar iş intizamı,
                yüksək effektivlik anlayışı və müştəri məmnuniyyətini başlıca
                vəzifə kimi rəhbər tutaraq fəaliyyətini davam etdirir.
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
          <Col md="6">
            <Image
              src="/img6.jpeg"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6">
            <h1>Şirkətin missiyası</h1>

            <p>
              Şirkətin əsas missiyası – suya qənaət, məhsuldarlıq və
              rentabelliyi artırmaq məqsədi ilə kənd təsərrüfatı və
              yaşıllaşdırma sahəsində intensiv suvarma metodlarının tətbiqi, su
              resurslarından istifadənin optimallaşdırılması və suvarma
              sistemlərinin idarə edilməsinin avtomatlaşdırılmasıdır.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h1>Dünyanın aparıcı markasi</h1>

            <p>
              Akb Agro suvarma sistemləri sektorunda dünyanın aparıcı
              markalarından biridir. Şirkətimiz kainatın ən qiymətli resursundan
              daha düzgün və səmərəli istifadə etmək üçün müasir avadanlıqlar və
              innovativ həllər təklif edir. ​ Sürətlə qloballaşan dünyada üç
              ciddi problemlə üz-üzəyik - su qıtlığı və çirklənmə, qidaya
              tələbatın artması və əkin sahələrinə ehtiyac. Bunların hər biri
              yaşadığımız planetin gələcəyi üçün çox vacibdir. Ağıllı suvarma
              məhz bu təhdidləri aradan qaldırmaqdan ötrü ön plana çıxmaqdadır.
              Beləliklə, məqsədimiz çox aydındır – müasir suvarma sistemlərini
              ölkəmizdə əlçatan və effektiv həll yolu etmək.
            </p>
          </Col>

          <Col md="6">
            <Image
              src="/img6.jpeg"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Image
              src="/img8.webp"
              alt="Logo"
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
            />
          </Col>
          <Col md="6">
            <h1>Bizə müraciət</h1>

            <p>
              Bizə müraciət etməklə keyfiyyətli məhsulu və sərfəli qiyməti bir
              ünvanda tapmış olacaqsınız. Dünyanın tanınmış şirkətlərinin
              istehsalı olan ən müasir avadanlıqlar təsərrüfat xərclərinizin
              əhəmiyyətli dərəcədə azalmasına, məhsuldarlığın isə artmasına
              ciddi təkan verəcək. ​ Suvarmadakı köhnə üsullar artıq keçmişdə
              qalıb. Dünyada yaşanan su qıtlığı bizi “Hər damla önəmlidir”
              şüarını əsas tutmağa sövq edir. ​ AGRODRİP daha az resursla daha
              keyfiyyətli və yüksək məhsuldarlıq əldə etmək yolunda ən yaxşı
              bələdçiniz olacaq. Gəlin, uğurlu gələcəyə doğru birlikdə
              addımlayaq.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
