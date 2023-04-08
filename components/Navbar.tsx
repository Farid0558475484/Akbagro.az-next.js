import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50}  className={styles.border}/>
        </Link>
      </div>
      <div>
        <ul className={styles.navbar__links}>
          <li>
            <Link href="/">Şirkət </Link>
          </li>
          <li>
            <Link href="/about-us">Haqqımızda</Link>
          </li>
          <li>
            <Link href="/products">Məhsullar</Link>
          </li>
          <li>
            <Link href="/services">Xidmətlər</Link>
          </li>
          <li>
            <Link href="/contact">Əlaqə</Link>
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
