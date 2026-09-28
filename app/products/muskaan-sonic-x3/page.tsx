import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const orderMessage = encodeURIComponent(
    "Hi, I would like to order the Muskaan Sonic X3 for Rs. 499. Please confirm delivery to my location.",
);
const orderUrl = `https://wa.me/9860172109?text=${orderMessage}`;

export const metadata: Metadata = {
    title: "Sonic X3 Electric Toothbrush",
    description:
        "Shop the Muskaan Sonic X3 for Rs. 499. Six brushing modes, soft bristles, IPX7 waterproofing, and delivery available in Kathmandu and across Nepal.",
    keywords: [
        "Muskaan Sonic X3",
        "Sonic X3 electric toothbrush",
        "six mode electric toothbrush Nepal",
        "electric toothbrush price in Nepal",
    ],
    openGraph: {
        type: "website",
        locale: "en_NP",
        siteName: "Muskaan",
        title: "Sonic X3 Electric Toothbrush | Muskaan Nepal",
        description:
            "Shop the Muskaan Sonic X3 for Rs. 499. Six brushing modes, soft bristles, IPX7 waterproofing, and delivery available in Kathmandu and across Nepal.",
    },
    twitter: {
        card: "summary",
        title: "Sonic X3 Electric Toothbrush | Muskaan Nepal",
        description:
            "Shop the Muskaan Sonic X3 for Rs. 499. Six brushing modes, soft bristles, IPX7 waterproofing, and delivery available in Kathmandu and across Nepal.",
    },
};

export default function MuskaanSonicX3LearnMore() {
    return (
        <main className="bg-[#f7f6f2] text-[#202b29]">
            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:px-10 md:grid-cols-2 md:items-center md:py-16">
                <div className="flex items-center justify-center bg-white p-6 sm:p-10">
                    <Image
                        src="/images/hero.svg"
                        alt="Muskaan Sonic X3 electric toothbrush"
                        width={720}
                        height={720}
                        priority
                        className="h-auto w-full max-w-[480px]"
                    />
                </div>
                <div>
                    <Link href="/" className="text-sm text-[#557269] hover:underline">
                        Home / Sonic X3
                    </Link>
                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#557269]">
                        Muskaan electric toothbrush
                    </p>
                    <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                        Sonic X3
                    </h1>
                    <p className="mt-4 max-w-lg leading-7 text-[#58635f]">
                        Make your brushing routine your own. The Sonic X3 combines high-frequency sonic vibration, soft DuPont bristles, and six modes, with a smart pause reminder to help you move between areas.
                    </p>
                    <p className="mt-6 text-3xl font-semibold">Rs. 499</p>
                    <p className="mt-2 text-sm text-[#58635f]">Sonic electric toothbrush · Six brushing modes</p>
                    <Link
                        href={orderUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#244d42] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#183a31]"
                    >
                        Buy at Rs. 499
                    </Link>
                    <p className="mt-5 text-sm leading-6 text-[#58635f]">
                        Delivery is available in Kathmandu and other locations across Nepal. Send us your location on WhatsApp to confirm delivery.
                    </p>
                </div>
            </section>
            <section className="border-y border-[#e3e4dd] bg-white">
                <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#557269]">
                        Product details
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold">Six modes, one everyday routine</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#58635f]">
                        Move between gentle, everyday, polishing, and massage-style settings to find the brushing feel that suits you.
                    </p>
                    <ul className="mt-7 grid gap-x-10 border-t border-[#e3e4dd] sm:grid-cols-2">
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">Novice</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A gentler starting point for first-time electric toothbrush users.</p>
                        </li>
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">Gentle</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A softer brushing feel for a more delicate routine.</p>
                        </li>
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">Cleaning</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A balanced mode for your regular brushing routine.</p>
                        </li>
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">White</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A higher-intensity setting for brushing focused on surface stains.</p>
                        </li>
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">Polishing</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A faster sonic setting for a polished-feeling clean.</p>
                        </li>
                        <li className="border-b border-[#e3e4dd] py-5">
                            <h3 className="font-semibold">Massage</h3>
                            <p className="mt-1 text-sm leading-6 text-[#58635f]">A changing vibration pattern for a massage-style brushing feel.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="bg-[#f7f6f2]">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-10 md:grid-cols-2">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#557269]">Designed for daily use</p>
                        <h2 className="mt-3 text-2xl font-semibold">Thoughtful details</h2>
                        <ul className="mt-6 divide-y divide-[#e3e4dd] border-y border-[#e3e4dd]">
                            <li className="py-4">
                                <h3 className="font-semibold">High-frequency sonic cleaning</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">Up to 42,000 vibrations per minute.</p>
                            </li>
                            <li className="py-4">
                                <h3 className="font-semibold">Soft DuPont bristles</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">Soft brush heads designed for a comfortable clean.</p>
                            </li>
                            <li className="py-4">
                                <h3 className="font-semibold">Smart brushing timer</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">A pause every 30 seconds helps cue a change of brushing area; automatic shut-off follows a two-minute session.</p>
                            </li>
                            <li className="py-4">
                                <h3 className="font-semibold">IPX7 waterproof body</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">Rinse after use. Keep the charging port dry before charging.</p>
                            </li>
                            <li className="py-4">
                                <h3 className="font-semibold">USB rechargeable with mode memory</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">Convenient USB charging and remembers your last selected mode.</p>
                            </li>
                            <li className="py-4">
                                <h3 className="font-semibold">Up to 60 days per charge</h3>
                                <p className="mt-1 text-sm leading-6 text-[#58635f]">Battery estimate based on two-minute brushing, twice daily.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#557269]">In the box</p>
                        <h2 className="mt-3 text-2xl font-semibold">Ready for your routine</h2>
                        <ul className="mt-6 divide-y divide-[#e3e4dd] border-y border-[#e3e4dd] text-sm text-[#58635f]">
                            <li className="py-4">Sonic X3 toothbrush handle</li>
                            <li className="py-4">Three DuPont brush heads</li>
                            <li className="py-4">USB charging cable</li>
                            <li className="py-4">User manual</li>
                        </ul>
                        <p className="mt-5 text-sm leading-6 text-[#58635f]">
                            Charging adapter is not included. For best hygiene, replace the brush head every 2–3 months or sooner if bristles become frayed.
                        </p>
                    </div>
                </div>
            </section>
            <section className="border-y border-[#e3e4dd] bg-white">
                <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <p className="max-w-xl text-sm leading-6 text-[#58635f]">
                            Delivery available in Kathmandu and across Nepal. Message us to confirm delivery to your location.
                        </p>
                        <Link
                            href={orderUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-11 items-center justify-center border border-[#244d42] px-5 text-sm font-semibold text-[#244d42] transition-colors hover:bg-[#f7f6f2]"
                        >
                            Order on WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}