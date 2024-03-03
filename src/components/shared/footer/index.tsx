import { footerSections, siteName } from "@/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-16 bg-slate-900 p-10 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-bold">{siteName}</h4>
        <p className="text-sm">
          Get out there & discover your next slope, mountain & destination!
        </p>

        <p className="text-xs text-gray-400 lg:mt-auto">
          Copyright 2023 {siteName}, Inc. <Link href="">Terms & Privacy</Link>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {footerSections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-primary">
              {section.heading}
            </h4>

            {section.items.map((item, index) => (
              <Link
                className="transform text-sm transition-all hover:-translate-x-1 hover:text-primary"
                href={item.link}
                key={index}
              >
                {item.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
