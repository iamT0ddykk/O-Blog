import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1
        className="text-4xl/snug font-extrabold py-8 text-left
      sm:text-5xl/snug sm:py-9
      md:text-6xl/snug md:py-10
      lg:text-7xl/snug lg:py-12
      "
      >
        <Link href="/">O blog</Link>
      </h1>
    </header>
  );
}
