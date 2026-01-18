import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";

export function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl"/>
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-coral blur-3xl"/>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <motion.h2
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight"
                        >
                            Ready to Upgrade{" "}
                            <span className="text-accent">Your Tech?</span>
                        </motion.h2>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.1}}
                            className="text-base sm:text-lg text-primary-foreground/70 mt-4"
                        >
                            Browse our complete collection of premium mobile accessories and
                            find the perfect match for your device.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.2}}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-accent text-accent-foreground h-12 sm:h-14 px-8 text-base sm:text-lg shadow-accent-glow hover:bg-accent/90 w-full sm:w-auto"
                        >
                            <Link to="/products">
                                Shop All Products
                                <ArrowRight className="w-5 h-5 ml-2"/>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full h-12 sm:h-14 px-8 text-base sm:text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                        >
                            <Link to="/about">Learn More</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
