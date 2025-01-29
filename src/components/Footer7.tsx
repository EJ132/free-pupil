"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <footer
      ref={ref}
      className="px-[5%] py-12 md:py-18 lg:py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center">
            <a
              href={logo.url}
              className="mb-8 transition-transform hover:scale-105 duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt || ""}
                className="inline-block invert opacity-90 hover:opacity-100 transition-opacity"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="mt-8 md:mt-0 text-white/80 hover:text-white transition-colors">
                {footerText}
              </p>
              <p className="text-white/60 hover:text-white/80 transition-colors">
                An IRS recognized 501(c)3 charitable organization
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <a className="text-blue-400 hover:text-purple-400 transition-colors">
                More Coming Soon...
              </a>
            </div>
          </div>
        </motion.div>
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
  footerText: " 2024 Free Pupil. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
