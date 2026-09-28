import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e8e9e4] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link href="/" aria-label="Muskaan home">
          <Image src="/logo.svg" alt="Muskaan" width={72} height={24} />
        </Link>
        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/products/muskaan-sonic-x3"
            className="text-[#40534d] hover:underline"
          >
            Sonic X3
          </Link>
          <Link href="/blogs" className="text-[#40534d] hover:underline">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
