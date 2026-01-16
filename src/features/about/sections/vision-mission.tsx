import {InfoCard} from "@/features/about/components/medium-card.tsx";

const infoCards = [
    {
        title: "Our Mission",
        description:
            "To empower our customers with the latest and most reliable mobile technology accessories. We strive to provide high-quality products that enhance your digital lifestyle, ensuring you stay connected, powered up, and productive.",
        className: "bg-primary/5",
    },
    {
        title: "Our Vision",
        description:
            "To be the most trusted and innovative retailer of mobile accessories globally, known for our exceptional customer service, curated product selection, and commitment to quality.",
        className: "bg-secondary/20",
    },
];

export function VisionMission() {
    return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
        {infoCards.map((card) => (
            <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                className={card.className}
            />
        ))}
    </div>
);
}