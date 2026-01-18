import {SectionHeader} from "@/features/about/sections/section-header";
// import {VisionMission} from "@/features/about/sections/vision-mission";
import {WhyUs} from "@/features/about/sections/why-us";
import {ContactSection} from "@/features/about/sections/contact-section";
import {StatsSection} from "@/features/about/sections/stats-section";
import {OurStory} from "@/features/about/sections/our-story";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <SectionHeader/>
            <StatsSection/>
            <OurStory/>
            <WhyUs/>
            <ContactSection/>
        </div>
    )
}
