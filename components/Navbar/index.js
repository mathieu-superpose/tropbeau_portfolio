import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <ul className={styles.list}>
        <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>work</a>
          </Link>
        </li>
        <li>
          <Link href="/links">
            <a>links</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
