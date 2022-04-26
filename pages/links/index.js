import Link from "next/link";
import styles from './Links.module.scss'

export default function Links() {
  return (
    <main className={styles.Links}>
      <p>coucou from links</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </main>
  );
}
