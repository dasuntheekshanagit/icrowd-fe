import {FeatureCard} from "@/features/about/components/about-feature-card.tsx";

const whyUsCards = [ {
    title: "Premium Quality",
    description: "We only stock products from reputable global brands.",
},
    {
        title: "Fast Shipping",
        description: "Quick and reliable delivery to your location.",
    },
    {
        title: "Expert Support",
        description: "Our team is here to help you find the perfect gadget.",
    },
    {
        title: "Secure Shopping",
        description: "Safe and encrypted transactions for peace of mind.",
    },];

export function WhyUs() {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
                Why Choose Us?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyUsCards.map((item) => (
                    <FeatureCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>

    );
}