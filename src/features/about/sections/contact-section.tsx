import {ContactInfo} from "@/features/about/components/contact-info";
import {MapEmbed} from "@/features/about/components/map-embed";

export function ContactSection() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <ContactInfo/>

            <MapEmbed
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621062!2d-122.08624618469227!3d37.421999879825215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1611819805427!5m2!1sen!2sus"
                title="iCrowd Location"
            />
        </div>
    );
}
