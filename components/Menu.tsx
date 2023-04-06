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

      <Offcanvas show={show} onHide={handleClose}>
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
                <Link href="/about-us">About</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/products">Products</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/services">Services</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
