"use client";
import { SparklesCore } from "@/component/sparkles";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSchema } from "@/schema/schema";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(EmailSchema),
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_API_KEY_SUPABASEURL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_API_KEY_SUPABASEKEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleSubmitEmail = async (data) => {
    try {
      const { email } = data;
      const { error } = await supabase.from("Mail").insert([{ mail: email }]);
      if (error) {
        if (error.code === "23505") {
          toast.error("This email is already registered.");
        } else {
          toast.error("Error adding email.", error);
        }
        console.error("Error adding email:", error);
      } else {
        toast.success("Email added successfully.");
        console.log("Email added successfully:", email);
      }
    } catch (error) {
      toast.error("Error adding email.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="h-[100dvh] min-h-[100dvh] max-h-[100dvh] relative min-w-full w-full max-w-full bg-black flex flex-col items-center gap-16 justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-[100dvh]">
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
          className="flex w-fit h-fit px-16 py-4 border border-dark-input-border bg-primary rounded-full"
          animate={{
            y: [100, 0, 0],
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-xs font-semibold text-center text-input-bg">
            Welcome to Mindix
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col gap-0 w-[90%] lg:w-[40%]"
          animate={{
            y: [200, 0, 0],
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-input-bg to-light">
            Transform Your Language Learning with AI
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col gap-8 w-[80%] lg:w-[30%] items-center justify-center z-40"
          animate={{
            y: [300, 0, 0],
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <form
            className="flex flex-col md:flex-row items-center justify-center gap-16 min-w-full w-full max-w-full"
            onSubmit={handleSubmit((data) => {
              handleSubmitEmail(data);
            })}
          >
            <div className="flex flex-col gap-8 w-full">
              <div className="min-w-full w-full max-w-full relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-16 pointer-events-none">
                  <EnvelopeIcon className="w-16 h-16 text-input-bg" />
                </div>
                <input
                  type="text"
                  placeholder={"Email"}
                  className="bg-dark-input-bg border border-dark-input-border text-input-bg text-sm rounded-[10px] focus:ring-input-border focus:border-input-border focus:outline-none block w-full ps-40 px-16 py-12 h-40"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-input-bg border-input-border text-primary text-sm font-semibold rounded-main px-16 py-12 h-40 flex items-center justify-center whitespace-nowrap w-full md:w-fit"
            >
              <p className="text-md">Get Notified</p>
            </motion.button>
          </form>
          <div className="flex flex-row gap-8 whitespace-normal md:whitespace-nowrap text-center">
            <p className="text-md font-bold text-light text-center">
              Created by -{" "}
              <Link
                href="https://www.linkedin.com/in/elcaneyvazli/"
                className="text-md font-bold text-light text-center"
              >
                Elcan Eyvazlı
              </Link>{" "}
              <Link
                href="https://www.linkedin.com/in/ravan-asad/"
                className="text-md font-bold text-light text-center"
              >
                Ravan Asad{" "}
              </Link>
            </p>
          </div>
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
          <div className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh]">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300%] md:w-[300%] aspect-[2/1]"
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[140%] aspect-[2/1]"
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[100%] aspect-[2/1]"
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
      <Toaster position="bottom-center" />
    </>
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
