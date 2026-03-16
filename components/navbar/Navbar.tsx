import Image from "next/image";
import Link from "next/link";

export default async function Navbar() {
  return (
    <div className="flex h-12 px-32 items-center justify-between font-light text-xs bg-white sticky top-0">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Muskaan" width={60} height={12} />
      </Link>
      <Link href={"/blogs"} className="hover:underline hover:cursor-pointer">
        Blogs
      </Link>
      <div></div>
    </div>
  );
}
