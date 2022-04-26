import Link from "next/link";
import styles from './Blog.module.scss'

export default function Blog() {
  return (
    <main className={styles.Blog}>
      <p>coucou from blog</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </main>
  );
}
