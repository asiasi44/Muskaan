import Image from "next/image";
import Link from "next/link";

export default async function SonicX3() {
  const phoneNumber = "9840034694";
  const message = "I want to buy muskaan sonic x3 toothbrush.";
  const sendWhatsappMessage = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="flex flex-col items-center text-center gap-4 bg-gray-100 pt-12">
      <div className="flex gap-2 flex-col">
        <div className="text-5xl font-bold">Muskaan Sonic X3</div>
        <div className="text-2xl ">7 Modes of Power for a Reasonable Price</div>
      </div>
      <div className="flex gap-6">
        <Link href={"/products/muskaan-sonic-x3"} className="bg-blue-500 px-6 active:bg-blue-700 py-2 rounded-4xl hover:cursor-pointer text-white">
          Learn More
        </Link>
        <Link
          href={sendWhatsappMessage}
          target="_blank"
          className="text-blue-500 hover:text-white hover:bg-blue-500 border-1 rounded-4xl px-6 py-2 hover:cursor-pointer"
        >
          Buy
        </Link>
      </div>
      <Image
        src={"/images/hero.svg"}
        alt="Hero Image of Toothbrush"
        width={600}
        height={500}
      />
    </div>
  );
}
