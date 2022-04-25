import Link from "next/link";

export default function Links() {
  return (
    <main>
      <p>coucou from links</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </main>
  );
}
