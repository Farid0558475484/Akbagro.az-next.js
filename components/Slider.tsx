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
          <p>Damci suvarma sistemleri</p>
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
          <p>Cileme suvarma sistemleri</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/s2.jpeg"
          alt="Logo"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          className={s.img}
        />
        <Carousel.Caption>
          <h3>Akb Agro</h3>
          <p>Ağıllı gübrələmə</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;
