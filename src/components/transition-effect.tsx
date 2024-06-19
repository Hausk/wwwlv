'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animationVariables = {
    initial: {
        right: "0%",
    },
    animate: {
        right: "105%",
        transition: {
            duration: 0.4,
            ease: 'circIn',
        },
    },
    exit: {
        right: ["-100%", "0%"],
        transition: {
            duration: 0.4,
            ease: 'circOut',
        },
    },
};

const TransitionEffect = () => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathName}>
                <div className="h-screen w-screen fixed top-0 right-0 bottom-0 pointer-events-none z-50">
                <motion.div variants={animationVariables} initial="initial" animate="animate" exit="exit"
                    className={`
                        h-full w-screen bg-accent relative
                    `}
                />
                </div>
            </div>
        </AnimatePresence>
    )
}
export default TransitionEffect;