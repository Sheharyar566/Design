import Image from "next/image";
import MiniHeading from "../shared/miniHeading";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  count: string;
  headline: string;
  title: string;
  content: string;
  readMoreLink: string;
  image: string;
  reverse?: boolean;
}

const Section = ({
  count,
  headline,
  title,
  content,
  readMoreLink,
  image,
  reverse = false,
}: Props) => {
  return (
    <div
      className={`mx-auto flex min-h-screen max-w-[1020px] flex-col items-center gap-12 px-10 py-20 md:py-0 lg:gap-24 lg:px-20 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      data-scroll-section
    >
      <div className="col-span-1 flex flex-1 flex-col gap-6">
        <div className="relative">
          <p className="absolute text-[75px] leading-none opacity-10 md:text-[100px]">
            {count}
          </p>
          <MiniHeading text={headline} />
        </div>

        <h2 className="font-lora text-2xl font-bold capitalize md:text-3xl lg:text-4xl">
          {title}
        </h2>

        <p className="text-sm">{content}</p>

        <Link
          href={readMoreLink}
          className="flex origin-left flex-row items-center gap-3 text-sm text-primary transition-all hover:scale-[1.05] hover:text-white"
        >
          read more <FaArrowRightLong />
        </Link>
      </div>

      <div className="flex-1">
        <Image
          alt={title}
          src={image}
          width={350}
          height={800}
          className="h-full min-h-[500px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Section;
