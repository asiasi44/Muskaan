import Image from "next/image";

export default async function Footer() {
  return (
    <div className="bg-white px-32 font-light text-xs ">
      <div className="py-4">
        <Image src={"/logo.svg"} alt="Muskaan" width={60} height={40}></Image>
      </div>
      <div className="flex items-center h-12 w-full justify-between border-t-1 border-gray-300">
        <div className="flex gap-16 text-gray-600 font-normal">
          <div>Copyright @ Muskaan. All rights reservered.</div>
          <div>Terms and Conditions</div>
        </div>
        <div>Nepal</div>
      </div>
    </div>
  );
}
