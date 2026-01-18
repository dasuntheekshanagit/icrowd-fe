import { Link } from "react-router-dom";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
    { label: "Deals", href: "/products?deals=true" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
};

export const FooterLinks = ()=> {
  return (
    <>
      <div>
        <h4 className="font-semibold font-display mb-4">Shop</h4>
        <ul className="space-y-3">
          {footerLinks.shop.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold font-display mb-4">Support</h4>
        <ul className="space-y-3">
          {footerLinks.support.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
