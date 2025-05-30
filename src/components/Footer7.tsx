"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Heart,
  BookOpen,
  Users,
  Calendar,
} from "lucide-react";

import FreePupilLogoDark from "../../public/svgs/FreePupilLogo.svg";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type ContactInfo = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
};

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
};

type Props = {
  logo: ImageProps;
  description: string;
  columnLinks: ColumnLinks[];
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  footerText: string;
  footerLinks: Links[];
};

export type Footer7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer7 = () => {
  const {
    logo,
    description,
    columnLinks,
    contactInfo,
    socialLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer7Defaults,
  } as Props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      ref={ref}
      className="px-[5%] py-16 md:py-20 lg:py-24 bg-black border-t border-white/10"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Logo & Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <a
                href={logo.url}
                className="inline-block mb-6 transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || ""}
                  className="invert opacity-90 hover:opacity-100 transition-opacity"
                  width={200}
                  height={80}
                  loading="lazy"
                />
              </a>
              <p className="text-white/70 text-sm mb-6 max-w-md">
                {description}
              </p>
              <p className="text-white/60 text-sm mb-6">
                An IRS recognized 501(c)3 charitable organization
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center cursor-not-allowed"
                    aria-label={`${social.label} (Coming Soon)`}
                  >
                    <social.icon className="w-4 h-4 text-white/30" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {columnLinks.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold text-lg mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-start gap-3 group"
                      >
                        <info.icon className="w-4 h-4 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <span>{info.value}</span>
                      </a>
                    ) : (
                      <div className="text-white/70 text-sm flex items-start gap-3">
                        <info.icon className="w-4 h-4 mt-0.5 opacity-60 flex-shrink-0" />
                        <span>{info.value}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Donation CTA */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Make a Difference Today
                </h3>
                <p className="text-white/80">
                  Your support helps us provide education and opportunity to
                  children in need.
                </p>
              </div>
              <motion.button
                onClick={() =>
                  (window.location.href = "#give-lively-widget-section")
                }
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          />
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center text-center"
          >
            <p className="text-white/60 text-sm">{footerText}</p>
          </motion.div>
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
  description:
    "Transforming lives through education since 2024. Free Pupil provides comprehensive educational support to underprivileged youth, helping them break the cycle of poverty and achieve their dreams.",
  columnLinks: [
    {
      title: "Programs",
      links: [
        { title: "Education Support", url: "#education", icon: BookOpen },
        { title: "Mentorship", url: "#mentorship", icon: Users },
        { title: "Life Skills", url: "#life-skills", icon: Heart },
        { title: "Community Events", url: "#events", icon: Calendar },
      ],
    },
    {
      title: "Get Involved",
      links: [
        { title: "Donate", url: "#give-lively-widget-section" },
        { title: "Volunteer", url: "#volunteer" },
        { title: "Become a Mentor", url: "#mentor" },
        { title: "Corporate Partnership", url: "#partnership" },
      ],
    },
  ],
  contactInfo: [
    {
      icon: Mail,
      label: "Email",
      value: "contact@freepupil.com",
      href: "mailto:contact@freepupil.com",
    },
  ],
  socialLinks: [
    {
      icon: Facebook,
      url: "https://facebook.com/freepupil",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/freepupil",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/freepupil",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/freepupil",
      label: "Twitter",
    },
  ],
  footerText: "2025 Free Pupil. All rights reserved.",
  footerLinks: [],
};
