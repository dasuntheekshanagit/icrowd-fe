import {FooterBrand} from "./footer-brand";
import {FooterLinks} from "./footer-links";
import {FooterContact} from "./footer-contact";
import {FooterBottom} from "./footer-bottom";

export const Footer = ()=> {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <FooterBrand/>
                    <FooterLinks/>
                    <FooterContact/>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    );
}
