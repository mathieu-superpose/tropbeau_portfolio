import Link from "next/link";

export default function Links() {
  return (
    <div>
      <p>coucou from links</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </div>
  );
}
