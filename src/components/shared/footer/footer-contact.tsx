import { Mail, Phone, MapPin } from "lucide-react";

export const FooterContact = ()=> {
  return (
    <div>
      <h4 className="font-semibold font-display mb-4">Contact</h4>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <span className="text-primary-foreground/70 text-sm">
            Kandy, Kottawa, Matara
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href="tel:+94714188143"
            className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
          >
            +94 71 418 8143
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href="mailto:support@icrowd.com"
            className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
          >
            support@icrowd.com
          </a>
        </li>
      </ul>
    </div>
  );
}
