import { Menu, X } from "lucide-react"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import type { NavigationSettings } from "@/lib/cms"

type HeaderProps = {
    navigation?: NavigationSettings | null
}

const Header = ({ navigation }: HeaderProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const logoPrimary = navigation?.logoPrimary || "BEL";
    const logoSecondary = navigation?.logoSecondary || "HOTEL";

    const toggleNavClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        if (!isClicked) return;

        const handleScrollClose = () => {
            setIsClicked(false);
        };

        window.addEventListener("scroll", handleScrollClose, { passive: true });
        window.addEventListener("wheel", handleScrollClose, { passive: true });
        window.addEventListener("touchmove", handleScrollClose, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScrollClose);
            window.removeEventListener("wheel", handleScrollClose);
            window.removeEventListener("touchmove", handleScrollClose);
        };
    }, [isClicked]);

  return (
    <header
        className={`absolute inset-x-0 top-0 z-[700] w-full transition-colors duration-300 ${
            isClicked ? "bg-background" : "bg-transparent"
        }`}
    >
    <div className="container flex items-center justify-center space-x-223 py-5">
        {/* Logo */}
        <a className="text-200 font-800 z-10 inline-block" href="/">
        <span className="text-primary">{logoPrimary}</span>{logoSecondary}
        </a>

        {/* Navigation */}
        <Navbar isOpen={isClicked} toggleNavClick={toggleNavClick} navigation={navigation} />

        <div className="flex items-center gap-4 justify-start">
            {/* Menu Button */}
            <button
                type="button"
                aria-label={isClicked ? "close menu" : "open menu"}
                className="inline-block cursor-pointer"
                onClick={toggleNavClick}
            >
                {isClicked ? (
                    <X size={26} className="translate-y-1 md:translate-y-0" />
                ) : (
                    <Menu size={26} className="translate-y-1 md:translate-y-0" />
                )}
            </button>
        </div>
    </div>
    </header>
  )
}

export default Header