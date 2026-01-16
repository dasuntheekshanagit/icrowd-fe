import {SectionHeader} from "@/features/about/sections/section-header";
import {VisionMission} from "@/features/about/sections/vision-mission";
import {WhyUs} from "@/features/about/sections/why-us";
import {ContactSection} from "@/features/about/sections/contact-section";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionHeader/>
            <VisionMission/>
            <WhyUs/>
            <ContactSection/>
        </div>
    )
}
