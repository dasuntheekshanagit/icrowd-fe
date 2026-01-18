import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const FooterBrand = ()=> {
  return (
    <div className="col-span-1 sm:col-span-2">
      <Link to="/" className="inline-flex items-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
          <span className="text-xl font-bold text-accent-foreground font-display">i</span>
        </div>
        <span className="text-xl font-bold font-display">
          <span className="text-primary-foreground">i</span>
          <span className="text-accent">Crowd</span>
        </span>
      </Link>
      <p className="text-primary-foreground/70 mb-6 max-w-sm">
        Your one-stop shop for premium mobile accessories and gadgets. 
        We bring you the best brands from around the world.
      </p>
      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
