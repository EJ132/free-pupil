"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

import HomePageLayout22Image from "../../../public/images/home/HomePageLayout22.png";
import HomePageLayoutABC_Block_Black from "../../../public/svgs/ABC_Block_Black.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HomePageLayout22Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout22 = () => {
  const { icon, heading, description, buttons, image } = {
    ...HomePageLayout22Defaults,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <Image
                src={icon.src}
                className="size-20"
                alt={icon.alt || ""}
                width={12}
                height={12}
              />
            </div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-black tracking-tighter">
              <span className="text-green-700">Empowering</span> Underprivileged
              Youth Through <span className="text-green-700">Education</span>{" "}
              and <span className="text-green-700">Opportunity</span>
            </h2>
            <p className="md:text-md text-black">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              className="w-full object-cover shadow-xlarge shadow-yellow-600 rounded-xl"
              alt={image.alt || ""}
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomePageLayout22Defaults: HomePageLayout22Props = {
  icon: {
    src: HomePageLayoutABC_Block_Black.src,
    alt: "ABC block icon",
  },
  heading: "Empowering Underprivileged Youth Through Education and Opportunity",
  description:
    "Our organization was founded with the mission to provide underprivileged youth with access to quality education and opportunities for a brighter future. We believe that every child deserves a chance to succeed and thrive, regardless of their background or circumstances.",
  buttons: [
    { title: "Learn More", variant: "secondary" },
    {
      title: "Sign Up",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  image: {
    src: HomePageLayout22Image.src,
    alt: "Supporting our organization creates a brighter future for underprivileged youth.",
  },
};
