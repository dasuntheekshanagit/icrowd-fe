import {motion} from "framer-motion"

export const ProductsHeader = () => {
    return (
        <div className="mb-6 sm:mb-8">
            <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-display"
            >
                All Products
            </motion.h1>
            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
                className="text-sm sm:text-base text-muted-foreground mt-2"
            >
                Browse our complete collection of premium accessories
            </motion.p>
        </div>
    )
}
