"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

import HomePageHeader5Image from "../../../public/images/home/HomePageHeader5.jpg";
import Image from "next/image";
import { cx } from "class-variance-authority";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HomePageHeader5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageHeader5 = () => {
  const { heading, description, buttons, image } = {
    ...HomePageHeader5Defaults,
  } as Props;
  return (
    <header className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl tracking-tighter">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">
              {description}
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  className={cx(
                    button.variant === "secondary-alt" &&
                      "bg-transparent border-white text-white",
                    button.variant !== "secondary-alt" &&
                      "bg-green-700 border-green-700 text-white"
                  )}
                  onClick={() =>
                    (window.location.href = "#give-lively-widget-section")
                  }
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image.src}
          className="object-cover size-full rounded-xl shadow-xxlarge shadow-gray-300"
          alt={image.alt || ""}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const HomePageHeader5Defaults: HomePageHeader5Props = {
  heading:
    "Supporting our organization creates a brighter future for underprivileged youth.",
  description:
    "By supporting us, you can make a real difference in the lives of underprivileged youth. Your contribution helps provide education, mentorship, and opportunities for a better future.",
  buttons: [
    { title: "Donate" },
    { title: "Get Involved", variant: "secondary-alt" },
  ],
  image: {
    src: HomePageHeader5Image.src,
    alt: "Underprivileged children receiving free education",
  },
};
