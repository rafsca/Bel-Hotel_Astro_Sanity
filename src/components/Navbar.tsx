import { useEffect, useState } from "react"
import { Instagram, MessageCircle, Phone } from "lucide-react"
import type { NavigationSettings } from "@/lib/cms"

type NavbarProps = {
  isOpen: boolean
    toggleNavClick: () => void
    navigation?: NavigationSettings | null
}

const fallbackNavigation = [
        { label: "HOME", href: "/" },
        { label: "CUSTOM TRAVEL", href: "/custom-travel" },
        { label: "EXPERIENCES", href: "/experiences" },
        { label: "TOURS", href: "/tours" },
        { label: "ACCOMMODATIONS", href: "/rooms" },
        { label: "PROJECTS", href: "/projects" },
        { label: "ABOUT US", href: "/about" },
        { label: "CONTACTS", href: "/contact" },
]

const Navbar = ({ isOpen, toggleNavClick, navigation }: NavbarProps) => {
    const [active, setActive] = useState("");

        const navItems = (navigation?.menuItems?.filter((item) => item?.label && item?.href) || fallbackNavigation).map((item) => ({
                name: (item.label || "").toUpperCase(),
                href: item.href || "/",
        }))

        const phone = navigation?.phone || "+39 0914 22356";
        const email = navigation?.email || "info@belhotel.com";
        const instagram = navigation?.instagram || "#";
        const whatsapp = navigation?.whatsapp || "#";

    useEffect(() => {
        setActive(window.location.pathname);
    }, [])

    const handleNavClick = (href: string) => {
        setActive(href);
        toggleNavClick();
    }
  return (
    <>
    {/* Hamburger Navigation */}
    <nav
                        className={`fixed top-16 left-0 z-[650] h-[calc(100vh-23rem)] w-full overflow-auto origin-top transition-all duration-300 ${
        isOpen
                    ? "translate-y-0 scale-y-100 opacity-100 pointer-events-auto border-b border-border bg-background shadow-2xl backdrop-blur-md duration-300"
                    : "-translate-y-4 scale-y-0 opacity-0 pointer-events-none border-transparent bg-transparent shadow-none duration-300"
      }`}
    >
                <div className="container  pb-8">
            <div className="grid items-start gap-8 md:grid-cols-[220px_1fr] md:gap-12">
                <div className="text-foreground">
  
                </div>

            <div>
            <ul className="mb-5 border-border">
                {navItems.map(item => (
                    <li key={item.name} className="border-b border-border py-3.5 w-250">
                        <a
                            className={`text-200 tracking-wide text-muted-foreground transition-colors duration-300 hover:text-primary ${active === item.href ? "text-primary" : ""}`}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="grid gap-6 text-muted-foreground sm:grid-cols-2">
                <div>
                    <p className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">SOCIAL</p>
                    <div className="flex items-center gap-4">
                        <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors duration-300">
                            <Instagram size={24} />
                        </a>
                        <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors duration-300">
                            <MessageCircle size={24} />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">CONTACTS</p>
                    <div className="space-y-2 text-lg">
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                            <Phone size={18} />
                            <span>{phone}</span>
                        </a>
                        <a href={`mailto:${email}`} className="inline-block hover:text-primary transition-colors duration-300">
                            {email}
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </nav>
    </>
  ) 
}


export default Navbar