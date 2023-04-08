import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import s from "../styles/Slider.module.scss";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="/img4.jpeg"
          alt="Logo"
          className={s.img}
          width={100}
          height={50}
          layout="responsive"
          objectFit="cover"
        />
        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Avtomatik suvarma</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/img2.jpeg"
          alt="Logo"
          className={s.img}
          width={100}
          height={70}
          layout="responsive"
          objectFit="cover"
        />

        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Damcı suvarma sistemləri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/img3.jpeg"
          alt="Logo"
          className={s.img}
          width={100}
          height={70}
          layout="responsive"
          objectFit="cover"
        />
        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Damlama boruları</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
