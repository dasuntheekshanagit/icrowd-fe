import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { NavMenu } from "@/components/shared/nav-menu";
import { NavigationSheet } from "@/components/shared/navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-background border-b z-50">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/*<Button*/}
          {/*  variant="outline"*/}
          {/*  className="hidden sm:inline-flex rounded-full"*/}
          {/*>*/}
          {/*  Sign In*/}
          {/*</Button>*/}
          <Button 
            className="rounded-full"
            onClick={() => window.open("https://wa.me/94714188143", "_blank")}
          >
            Contact Us
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
