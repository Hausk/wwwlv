'use client'
import { motion } from "framer-motion";
import Image from "next/image";
const animationVariables = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeIn',
        },
    }
};
export const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            variants={animationVariables}
            initial="initial"
            animate="animate"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.4,
                        duration: 0.4,
                        ease: "easeInOut",
                    }
                }} 
                className="w-[70vw] h-[70vw] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative top-0"
            >
                <Image src="/assets/header.png" priority quality={100} fill alt="" className="object-contain relative rounded-full"/>
            </motion.div>
        </motion.div>
        <motion.svg className="w-[70vw] h-[70vw] xl:w-[506px] xl:h-[506px] absolute top-0" fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="250" stroke="#Ef4444" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.svg>
    </div>
  )
}