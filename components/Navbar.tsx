import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div>
        <ul className={styles.navbar__links}>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.phone}>
        <a href="tel:+99477384242">
          <Button variant="success">Zeng et</Button>
        </a>
      </div>
    </nav>
  );
}
