import Image from "next/image";

import FreePupilLogoDark from "../../public/svgs/FreePupilLogo.svg";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer7 = () => {
  const { logo, footerText, columnLinks, footerLinks } = {
    ...Footer7Defaults,
  } as Props;
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-black">
      <div className="container">
        <div className="flex flex-col items-center">
          <a href={logo.url} className="mb-8">
            <Image
              src={logo.src}
              alt={logo.alt || ""}
              className="inline-block invert"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="mt-8 md:mt-0 text-white/80">{footerText}</p>
            <p className="text-white/60">
              An IRS recognized 501(c)3 charitable organization
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <a className="text-white/80 hover:text-white transition-colors">
              More Coming Soon...
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer7Defaults: Footer7Props = {
  logo: {
    url: "#",
    src: FreePupilLogoDark.src,
    alt: "Free Pupil Logo",
  },
  columnLinks: [
    {
      links: [
        { title: "Link One", url: "#" },
        { title: "Link Two", url: "#" },
        { title: "Link Three", url: "#" },
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
      ],
    },
  ],
  footerText: "© 2024 Free Pupil. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
