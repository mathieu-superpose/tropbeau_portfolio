import Link from "next/link";

export default function Work() {
  return (
    <div>
      <p>coucou from work</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </div>
  );
}
