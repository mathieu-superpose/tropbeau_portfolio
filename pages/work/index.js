import Link from "next/link";
import styles from './Work.module.scss';

export default function Work() {
  return (
    <main className={styles.Work}>
      <p>coucou from work</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </main>
  );
}
