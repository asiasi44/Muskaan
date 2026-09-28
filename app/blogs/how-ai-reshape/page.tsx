import { LuCirclePlay } from "react-icons/lu";
import { BLOG_DATA } from "@/lib/data/randomBlog";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: BLOG_DATA.headline,
  description: BLOG_DATA.deck,
  openGraph: {
    type: "article",
    locale: "en_NP",
    siteName: "Muskaan",
    title: BLOG_DATA.headline,
    description: BLOG_DATA.deck,
  },
  twitter: {
    card: "summary",
    title: BLOG_DATA.headline,
    description: BLOG_DATA.deck,
  },
};

const playfair_display = Playfair_Display({
  subsets: ["latin"],
});

const source_serif_4 = Source_Serif_4({
  subsets: ["latin"],
});

export default async function DynamicBlogPage() {
  return (
    <div className="flex w-full my-12">
      <div className="w-1/4"></div>
      <div className="flex flex-col justify-center w-2/4">
        <div className="text-center flex gap-4 flex-col">
          <div className={`${playfair_display.className} text-5xl font-bold`}>
            {BLOG_DATA.headline}
          </div>
          <div className={`${source_serif_4.className} font-light text-lg`}>
            {BLOG_DATA.deck}
          </div>
          <div className="h-[1px] bg-gray-200 my-2 w-full"></div>
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex gap-2 items-center">
            <div>
              <LuCirclePlay size={18} />
            </div>
            <div>Listen</div>
            <div>{BLOG_DATA.readingTime} min read</div>
          </div>
          <div>Share</div>
        </div>
        <div className="my-4 flex flex-col gap-2">
          <Image
            src={BLOG_DATA.imageUrl}
            alt={BLOG_DATA.imageCaption || ""}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <div className={`${source_serif_4.className} text-sm text-[#666]`}>
            {BLOG_DATA.imageCaption}
            <span className="text-[#326891] font-bold">
              {" "}
              {BLOG_DATA.imageCredit}
            </span>
          </div>
        </div>
        <div
          className={`${source_serif_4.className} flex flex-col justify-center mb-2 gap-2 font-bold text-base`}
        >
          {/* <div className="flex gap-2">
              {BLOG_DATA.authors.map((eachAuthor: string) => (
                <Avatar key={eachAuthor} name={eachAuthor} variant="beam" />
              ))}
            </div> */}
          <div className="flex gap-2">
            By
            {BLOG_DATA.authors.map((eachAuthor: string, index: number) => (
              <span key={index}>
                <span className="underline">{eachAuthor}</span>
                {index !== BLOG_DATA.authors.length - 1 && ", "}
              </span>
            ))}
          </div>
          <div className="text-gray-600 font-medium text-sm">
            {BLOG_DATA.date}
          </div>
        </div>
        <div
          className={`${source_serif_4.className} font-light text-lg text-[#333] font-normal flex flex-col gap-2 text-justify mt-4`}
        >
          {BLOG_DATA.body.map((eachParagraph: string, index: number) => {
            return (
              <div
                key={index}
                className={
                  index === 0
                    ? "[&::first-letter]:font-serif [&::first-letter]:text-[86px] [&::first-letter]:font-black [&::first-letter]:float-left [&::first-letter]:leading-[0.76] [&::first-letter]:mr-2 [&::first-letter]:mt-2 [&::first-letter]:text-[#121212]"
                    : ""
                }
              >
                {eachParagraph}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
}
