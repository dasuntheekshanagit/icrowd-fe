import {motion} from "framer-motion";

export const BrandSectionHeader = () => {
    return (
        <div className="text-center mb-8 sm:mb-12">
            <motion.span
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="text-accent font-medium text-sm sm:text-base"
            >
                Trusted Partners
            </motion.span>
            <motion.h2
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: 0.1}}
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mt-1"
            >
                Shop by Brand
            </motion.h2>
        </div>
    )
}
