import Image from "next/image";

import HomePageLayout6Image from "../../../public/images/home/HomePageLayout6.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  image: ImageProps;
};

export type HomePageLayout6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HomePageLayout6 = () => {
  const { description, image, subHeadings } = {
    ...HomePageLayout6Defaults,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
              <span className="text-green-500">Supporting</span> our
              organization creates a{" "}
              <span className="text-green-500">brighter future</span> for{" "}
              <span className="text-green-500">underprivileged youth.</span>
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-white/80">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-green-500">
                    {subHeading.title}
                  </h6>
                  <p className="text-white/80">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              className="w-full object-cover shadow-xlarge shadow-green-500 rounded-xl"
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

export const HomePageLayout6Defaults: HomePageLayout6Props = {
  tagline: "Tagline",
  heading:
    "Supporting our organization creates a brighter future for underprivileged youth.",
  description:
    "By supporting us, you can make a real difference in the lives of underprivileged youth. Your contribution helps provide education, mentorship, and opportunities for a better future.",
  subHeadings: [
    {
      title: "Education",
      description:
        "Access to quality education is crucial in breaking the cycle of poverty.",
    },
    {
      title: "Empowerment",
      description:
        "Your support empowers underprivileged youth to overcome obstacles and achieve their dreams.",
    },
  ],
  image: {
    src: HomePageLayout6Image.src,
    alt: "Supporting our organization creates a brighter future for underprivileged youth.",
  },
};
