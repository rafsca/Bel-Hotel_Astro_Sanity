import { useEffect, useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

type NavbarProps = {
  isOpen: boolean
    toggleNavClick: () => void
}

const Navbar = ({ isOpen, toggleNavClick }: NavbarProps) => {
    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(window.location.pathname);
    }, [])

    const handleNavClick = (href: string) => {
        setActive(href);
        toggleNavClick();
    }
  return (
    <>
    {/* Mobile Navigation */}
    <nav
      className={`fixed top-0 left-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
      }`}
    >
        <ul className="border-muted bg-background h-full w-[70%] border-r pt-[9rem] pl-4">
            {navigation.map(item => (
                <li key={item.name} className="text-200 font-500 mb-4 capitalize">
                    <a className={`hover:text-primary transition-colors duration-300 ${active === item.href ? "text-primary" : ""}`} href={item.href} onClick={() => handleNavClick(item.href)}>{item.name}</a>
                </li>
            ))}
        </ul>
    </nav>

    {/* Desktop Navigation */}
    <nav className="hidden lg:inline-block">
        <ul className="md:flex md:gap-6 capitalize">
            {navigation.map(item => (
                <li key={item.name} className="text-100 font-500 ">
                    <a className={`${
                        active === item.href
                            ? "bg-primary rounded-md px-2 py-1 text-white"
                            : ""} transition-colors duration-300`} 
                            href={item.href} 
                            onClick={() => setActive(item.href)}
                            >
                                {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </>
  ) 
}


export default Navbar