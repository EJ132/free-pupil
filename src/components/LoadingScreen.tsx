"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import FreePupilLogo from "../../public/svgs/FreePupilLogo.svg";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"
            />
            <Image
              src={FreePupilLogo.src}
              alt="Free Pupil"
              width={128}
              height={128}
              className="relative z-10 invert"
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 text-white text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};