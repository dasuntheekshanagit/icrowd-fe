import {SectionHeader} from "@/features/about/sections/section-header.tsx";
import {VisionMission} from "@/features/about/sections/vision-mission.tsx";
import {WhyUs} from "@/features/about/sections/why-us.tsx";
import {ContactSection} from "@/features/about/sections/contact-section.tsx";

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
