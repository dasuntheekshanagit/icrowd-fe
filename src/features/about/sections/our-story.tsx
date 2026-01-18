import {motion} from "framer-motion";

export const OurStory = () => {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
            >
                <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        iCrowd began with a simple vision: to make premium mobile accessories
                        accessible to everyone in Sri Lanka. What started as a small online
                        store has now grown into a trusted destination for tech enthusiasts
                        across the island.
                    </p>
                    <p>
                        We carefully curate our collection from the world's leading brands,
                        ensuring that every product we offer meets our high standards for
                        quality, durability, and design.
                    </p>
                    <p>
                        Our commitment to customer satisfaction drives everything we do.
                        From fast island-wide delivery to our dedicated support team, we're
                        here to ensure your shopping experience is nothing short of exceptional.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="relative aspect-square rounded-2xl overflow-hidden"
            >
                <img
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=600&fit=crop"
                    alt="Team at work"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-20"/>
            </motion.div>
        </div>
    );
}