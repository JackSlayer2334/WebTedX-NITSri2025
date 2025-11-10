"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  // ✅ useMemo to prevent re-creation on every render
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "speakers", label: "Speakers" },
      { id: "pastspeakers", label: "Past Speakers" },
      { id: "guests", label: "Guests" },
      { id: "schedule", label: "Schedule" },
      { id: "gallery", label: "Gallery" },
      { id: "faq", label: "FAQ" },
      { id: "sponsors", label: "Sponsors" },
      { id: "contact", label: "Contact" },
      { id: "location", label: "Location" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 50);

    const scrollPos = y + window.innerHeight / 3;
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) {
        const { offsetTop, offsetHeight } = el;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    }
  }, [navItems]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidth);
    };
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  // Responsive visibility logic
  let visibleItems = navItems;
  let dropdownItems: typeof navItems = [];

  if (screenWidth >= 768 && screenWidth < 1145) {
    visibleItems = navItems.slice(0, 3);
    dropdownItems = navItems.slice(3);
  } else if (screenWidth >= 1145) {
    visibleItems = navItems;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer select-none text-2xl font-bold"
          >
            <span className="text-primary">TEDx</span>
            <span className="text-foreground">NITSrinagar</span>
          </div>

          {/* Desktop & Medium Menu */}
          <div className="hidden md:flex items-center gap-6">
            {visibleItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium relative pb-1 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:shadow-[0_0_8px_rgba(235,47,38,0.6)]"
                    : "text-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Dropdown for leftover items in medium view */}
            {dropdownItems.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
                    More
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="rounded-xl shadow-md bg-background/95 backdrop-blur-sm"
                >
                  {dropdownItems.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Buy Tickets button */}
            <Button
              onClick={() => scrollToSection("tickets")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            >
              Buy Tickets
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80vw] max-w-sm sm:w-[400px]"
            >
              <nav className="flex flex-col gap-3 mt-10">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("tickets")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect mt-4"
                >
                  Buy Tickets
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
