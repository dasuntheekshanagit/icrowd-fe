import { Link } from "react-router-dom";

export const FooterBottom = ()=> {
  return (
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} iCrowd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-accent transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
