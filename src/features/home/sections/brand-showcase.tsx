import {BrandSectionHeader} from "@/features/home/components/brand-section-header";
import {BrandGrid} from "@/features/home/components/brand-grid";

export const BrandShowcase = () => {

    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <BrandSectionHeader/>
                <BrandGrid/>
            </div>
        </section>
    );
}
