"use client";

import { useEffect } from "react";

export const GiveLivelyWidget = () => {
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
    <section
      id="give-lively-widget-section"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-black"
    >
      <div className="container">
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
          Donate to our cause
        </h2>
        <p className="mb-6 md:mb-8 md:text-md text-white/80">
          Your donation will help us provide education, mentorship, and
          opportunities for a better future.
        </p>

        <div
          id="give-lively-widget"
          className="gl-simple-donation-widget"
        ></div>
      </div>
    </section>
  );
};
