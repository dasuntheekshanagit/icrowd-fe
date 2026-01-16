import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {ContactItem} from "@/features/about/components/contact-item.tsx";

export function ContactInfo() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <p className="text-muted-foreground mb-8">
                Have questions about a product or your order? We're here to help!
                Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">
                <ContactItem
                    title="Visit Us"
                    icon={<MapPin className="w-6 h-6 text-primary" />}
                >
                    <p className="text-muted-foreground">
                        Kandy/Kottawa/Matara
                    </p>
                </ContactItem>

                <ContactItem
                    title="Call Us"
                    icon={<Phone className="w-6 h-6 text-primary" />}
                >
                    <p className="text-muted-foreground">+94 (71) 4188-143</p>
                    <p className="text-sm text-muted-foreground">
                        Mon - Fri, 9am - 6pm
                    </p>
                </ContactItem>

                <ContactItem
                    title="Email Us"
                    icon={<Mail className="w-6 h-6 text-primary" />}
                >
                    <p className="text-muted-foreground">support@icrowd.com</p>
                </ContactItem>

                <ContactItem
                    title="Opening Hours"
                    icon={<Clock className="w-6 h-6 text-primary" />}
                >
                    <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground">
                        Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                </ContactItem>
            </div>
        </div>
    );
}
