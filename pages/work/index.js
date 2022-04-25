import Link from "next/link";

export default function Work() {
  return (
    <main>
      <p>coucou from work</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </main>
  );
}
