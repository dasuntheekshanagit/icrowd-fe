import {CategorySectionHeader} from "@/features/home/components/category-section-header";
import {CategoryGrid} from "@/features/home/components/category-grid";


export const CategoryShowcase = () => {

    return (
        <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <CategorySectionHeader/>
                <CategoryGrid/>
            </div>
        </section>
    );
}
