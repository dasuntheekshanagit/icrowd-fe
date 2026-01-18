import { motion } from "framer-motion";
import { Award, Truck, HeartHandshake } from "lucide-react";
import { ValueCard } from "../components/value-card";

const values = [
  {
    icon: Award,
    title: "100% Authentic",
    description: "We only sell genuine products from authorized distributors",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery in Colombo, next-day island-wide",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "24/7 support and hassle-free returns policy",
  },
];

export const WhyUs = ()=> {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-muted/30 rounded-3xl p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold font-display text-center mb-10">
        Why Choose Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value) => (
          <ValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </motion.div>
  );
}
