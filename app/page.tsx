import SonicX3Hero from "@/components/hero/SonicX3Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Toothbrush in Nepal",
  description:
    "Shop the Muskaan Sonic X3 for Rs. 499: six brushing modes, sonic vibration, soft bristles, and delivery available in Kathmandu and across Nepal.",
};

export default async function Home() {
  return (
    <div>
      <SonicX3Hero />
    </div>
  );
}
