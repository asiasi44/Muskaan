import Link from "next/link";

export default async function BlogPage() {
  return (
    <div>
      <Link href={"/blogs/how-ai-reshape"} className="hover:underline">
        How AI is Reshaping the Way We Work
      </Link>
    </div>
  );
}
