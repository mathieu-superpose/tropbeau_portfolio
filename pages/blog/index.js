import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <p>coucou from blog</p>
      <Link href="/">
        <a>back home</a>
      </Link>
    </div>
  );
}
