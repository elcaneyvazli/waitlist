"use client";
import { SparklesCore } from "@/component/sparkles";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="h-screen min-h-screen max-h-screen relative w-full bg-black flex flex-col items-center gap-16 justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={1.0}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#9CA3AF"
        />
      </div>

      <motion.div
        className="flex flex-col gap-0 w-[40%]"
        animate={{
          y: [100, 0, 0],
          opacity: [0, 0.8, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-4xl font-bold text-center text-white relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-input-bg to-light">
          Transform Your Language Learning with AI
        </h1>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: [50, 0, 50],
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          y: { duration: 4, ease: "easeOut", repeat: Infinity },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="relative w-full h-screen min-h-screen max-h-screen">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300%] aspect-[2/1]"
            style={{
              background: `
                radial-gradient(
                  50% 50% at 50% 100%,
                  rgba(255, 255, 255, 0.12) 0%,
                  rgba(255, 255, 255, 0.06) 25%,
                  rgba(255, 255, 255, 0.02) 50%,
                  transparent 100%
                )
              `,
            }}
          />

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] aspect-[2/1]"
            style={{
              background: `
                radial-gradient(
                  50% 50% at 50% 100%,
                  rgba(255, 255, 255, 0.24) 0%,
                  rgba(255, 255, 255, 0.12) 25%,
                  rgba(255, 255, 255, 0.04) 50%,
                  transparent 100%
                )
              `,
            }}
          />

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] aspect-[2/1]"
            style={{
              background: `
                radial-gradient(
                  50% 50% at 50% 100%,
                  rgba(255, 255, 255, 0.48) 0%,
                  rgba(255, 255, 255, 0.24) 25%,
                  rgba(255, 255, 255, 0.08) 50%,
                  transparent 100%
                )
              `,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

{
  /* <motion.div
        className="absolute w-full bottom-96 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm rounded-full" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 rounded-full" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm rounded-full" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 rounded-full" />
      </motion.div> */
}
