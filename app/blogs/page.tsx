import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from Muskaan.",
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Muskaan",
    title: "Blog | Muskaan Nepal",
    description: "Articles and updates from Muskaan.",
  },
  twitter: {
    card: "summary",
    title: "Blog | Muskaan Nepal",
    description: "Articles and updates from Muskaan.",
  },
};

export default async function BlogPage() {
  return (
    <div>
      <Link href={"/blogs/how-ai-reshape"} className="hover:underline">
        How AI is Reshaping the Way We Work
      </Link>
    </div>
  );
}
