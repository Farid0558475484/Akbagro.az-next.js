import React, { useState } from "react";
import s from "../styles/Menu.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={s.bodyMenu}>
        <div className={s.MobileMenu}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
          <a href="tel:+99477384242">
            <Button variant="success">Zeng et</Button>
          </a>
          <Button variant="primary" onClick={handleShow}>
            Menu
          </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose} className={s.bodyMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className={s.title}>
              {" "}
              <li onClick={handleClose}>
                <Link href="/"> AkbAgro.az</Link>
              </li>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <ul className={s.navbar__links}>
                <li onClick={handleClose}>
                  <Link href="/">Şirkət</Link>
                </li>
                <li onClick={handleClose}>
                  <Link href="/about-us">Haqqımızda</Link>
                </li>
                <li onClick={handleClose}>
                  <Link href="/products">Məhsullar</Link>
                </li>
                <li onClick={handleClose}>
                  <Link href="/services">Xidmətlər</Link>
                </li>
                <li onClick={handleClose}>
                  <Link href="/contact">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Menu;
