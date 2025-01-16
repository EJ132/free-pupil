"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

import HomePageLayoutTreeSVG from "../../../public/svgs/Oak_Tree_Black.svg";
import HomePageLayoutSchoolSVG from "../../../public/svgs/School_Building_Black.svg";
import HomePageLayoutHeartSVG from "../../../public/svgs/Heart_Cross_Black.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type HomePageLayout242Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout242 = () => {
  const { sections = [] } = { ...HomePageLayout242Defaults };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
      <div className="container flex flex-col items-start">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl tracking-tighter text-white">
            Providing{" "}
            <span className="text-green-500">Educational Scholarships</span> and{" "}
            <span className="text-green-500">Mentorship Programs</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-large shadow-gray-800 p-4 border-gray-800 bg-gray-900"
            >
              <div className="mb-5 md:mb-6">
                <Image
                  src={section.icon.src}
                  className="size-12 invert"
                  alt={section.icon.alt || ""}
                  width={12}
                  height={12}
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl tracking-tighter text-green-500">
                {section.heading}
              </h3>
              <p className="mb-5 md:mb-6 text-white/80">
                {section.description}
              </p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                <Button
                  variant={section.button.variant}
                  size={section.button.size}
                  iconRight={section.button.iconRight}
                  iconLeft={section.button.iconLeft}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {section.button.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePageLayout242Defaults: HomePageLayout242Props = {
  heading: "Providing Educational Scholarships and Mentorship Programs",
  sections: [
    {
      icon: {
        src: HomePageLayoutTreeSVG.src,
        alt: "Tree icon",
      },
      heading: "Empowering Youth through Sports and Recreation",
      description:
        "Our organization offers many programs and initiatives aimed at supporting underprivileged youth, including mentorship, and sports and recreation centers. ",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
    {
      icon: {
        src: HomePageLayoutSchoolSVG.src,
        alt: "School icon",
      },
      heading: "Promoting Arts and Cultural Enrichment for Youth",
      description:
        "We believe in the power of arts and culture to inspire and uplift young minds. Our organization provides opportunities for underprivileged youth to engage in various artistic and cultural activities.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
    {
      icon: {
        src: HomePageLayoutHeartSVG.src,
        alt: "Heart icon",
      },
      heading: "Supporting Health and Wellness Initiatives for Youth",
      description:
        "We prioritize the health and well-being of underprivileged youth. Through our programs, we promote physical fitness, mental wellness, and access to healthcare services.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
  ],
};
