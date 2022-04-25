import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TBS - Home</title>
        <meta name="description" content="Mathieu Joly personnal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my site!</h1>
        <p>coucou from main</p>
        <Link href="/blog">
          <a>get to blog</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>coucou from footer</p>
      </footer>
    </div>
  );
}
