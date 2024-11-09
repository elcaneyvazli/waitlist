import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Loading() {
  return (
    <AnimatePresence>
      <motion.div
        className="text-xl text-input-bg z-50 absolute left-0 top-0 bottom-0 right-0 w-full h-full min-w-full min-h-full max-w-full max-h-full bg-primary flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ scale: 2, rotate: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-[76px] h-[76px] flex items-center justify-center"
        >
          <Image
            src={logo}
            alt="Loading logo"
            width={76}
            height={76}
            className="w-fit h-fit"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
