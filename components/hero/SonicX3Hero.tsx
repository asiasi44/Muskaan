import Image from "next/image";
import Link from "next/link";

export default function SonicX3Hero() {
  const message = encodeURIComponent(
    "Hi, I would like to order the Muskaan Sonic X3 for Rs. 499. Please confirm delivery to my location.",
  );
  const orderUrl = `https://wa.me/9860172109?text=${message}`;

  return (
    <main className="bg-[#f7f6f2] text-[#202b29]">
      <section className="mx-auto grid min-h-[590px] max-w-6xl items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:py-14">
        <div className="order-2 flex flex-col items-start md:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#557269]">
            Electric toothbrush · Available in Nepal
          </p>
          <h1 className="max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">
            Sonic clean. Your way.
          </h1>
          <p className="mt-4 text-lg text-[#58635f]">Muskaan Sonic X3</p>
          <p className="mt-2 max-w-md leading-7 text-[#58635f]">
            Choose from six brushing modes, with soft bristles and a smart
            reminder to guide your daily routine.
          </p>
          <p className="mt-6 text-3xl font-semibold">Rs. 499</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-[#244d42] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#183a31]"
            >
              Buy at Rs. 499
            </Link>
            <Link
              href="/products/muskaan-sonic-x3"
              className="inline-flex min-h-12 items-center justify-center border border-[#9ba9a2] px-6 text-sm font-semibold text-[#244d42] transition-colors hover:bg-white"
            >
              Learn more
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#58635f]">
            Delivery available in Kathmandu and across Nepal. Message us with
            your location to confirm delivery.
          </p>
        </div>
        <div className="order-1 flex items-center justify-center md:order-2">
          <Image
            src="/images/hero.svg"
            alt="Muskaan Sonic X3 electric toothbrush"
            width={720}
            height={720}
            priority
            className="h-auto w-full max-w-[520px]"
          />
        </div>
      </section>
      <div className="border-y border-[#e3e4dd] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm sm:px-10 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-[#244d42]">Delivery across Nepal</p>
          <p className="text-[#58635f]">
            Kathmandu and other locations. Ask us on WhatsApp about your area.
          </p>
        </div>
      </div>
    </main>
  );
}
