import Image from "next/image";
import Link from "next/link";
import logo from "./img/TBS_logo.svg";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            width="200"
            height="100"
            alt="Trop Beau Site logo"
          />
        </a>
      </Link>
    </div>
  );
}
