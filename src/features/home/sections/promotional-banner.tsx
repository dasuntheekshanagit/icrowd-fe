import {motion} from "framer-motion";
import {Headphones, Shield, Truck, Zap} from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "On orders over Rs. 5,000",
    },
    {
        icon: Shield,
        title: "Warranty",
        description: "1 Year manufacturer warranty",
    },
    {
        icon: Zap,
        title: "Fast Delivery",
        description: "Same day island-wide",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Always here to help",
    },
];

export const PromotionalBanner = () => {
    return (
        <section className="bg-gradient-primary text-primary-foreground py-3">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center md:justify-between gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: index * 0.1}}
                            className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                            <feature.icon className="w-4 h-4 text-accent shrink-0"/>
                            <div className="flex flex-col sm:flex-row sm:gap-1">
                                <span className="font-medium">{feature.title}</span>
                                <span className="hidden lg:inline text-primary-foreground/70">
                                    — {feature.description}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
