"use client";

import { useEffect } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";

export const GiveLivelyWidget = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://secure.givelively.org/widgets/simple_donation/99-3509289.js?show_suggested_amount_buttons=true&show_in_honor_of=false&address_required=false&has_required_custom_question=null&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        id="give-lively-widget-section"
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900"
      >
        <div className="container max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl tracking-tighter">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Support
              </span>{" "}
              <span className="text-white">Our Mission to</span>{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Transform Lives
              </span>
            </h2>
            <p className="mb-8 md:mb-10 md:text-lg text-white/80 max-w-2xl">
              Your donation will help us provide education, mentorship, and
              opportunities for a better future. Every contribution makes a difference
              in empowering underprivileged youth.
            </p>

            <div
              id="give-lively-widget"
              className="gl-simple-donation-widget bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-[0_0_30px_0px_rgba(59,130,246,0.1)]"
            ></div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};
