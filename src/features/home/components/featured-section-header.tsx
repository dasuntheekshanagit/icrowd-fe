import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

export const FeaturedSectionHeader = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
                <motion.span
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-accent font-medium"
                >
                    Curated Selection
                </motion.span>
                <motion.h2
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1}}
                    className="text-3xl md:text-4xl font-bold font-display mt-1"
                >
                    Featured Products
                </motion.h2>
            </div>
            <Button asChild variant="outline" className="rounded-full group">
                <Link to="/products">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                </Link>
            </Button>
        </div>
    );
}