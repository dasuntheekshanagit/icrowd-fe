import {motion} from "framer-motion";

export function SectionHeader() {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="text-accent font-medium"
            >
                About Us
            </motion.span>
            <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
                className="text-4xl md:text-5xl font-bold font-display mt-2"
            >
                Your Trusted Partner for{" "}
                <span className="text-accent">Premium Tech</span>
            </motion.h1>
            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className="text-lg text-muted-foreground mt-6"
            >
                At iCrowd, we're passionate about bringing you the best mobile accessories
                from around the world. Founded in 2020, we've grown to become Sri Lanka's
                leading destination for premium tech accessories.
            </motion.p>
        </div>
    );
}