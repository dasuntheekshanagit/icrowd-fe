import {motion} from "framer-motion";
import {Award, HeartHandshake, Truck, Users} from "lucide-react";

const stats = [
    {label: "Happy Customers", value: "10,000+", icon: Users},
    {label: "Products Sold", value: "50,000+", icon: Award},
    {label: "Fast Deliveries", value: "99.5%", icon: Truck},
    {label: "5-Star Reviews", value: "4,500+", icon: HeartHandshake},
];

export const StatsSection = () =>{
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl bg-card shadow-elegant"
                >
                    <stat.icon className="w-10 h-10 text-accent mx-auto mb-4"/>
                    <div className="text-3xl font-bold font-display">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
            ))}
        </motion.div>
    );
}