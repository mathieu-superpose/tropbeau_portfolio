import Image from "next/image";
import Link from "next/link";
import logo from "./img/tbs.svg";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <a className={styles.Logo}>
          <Image src={logo} width="150" height="80" alt="Trop Beau Site logo" />
        </a>
      </Link>
    </div>
  );
}
