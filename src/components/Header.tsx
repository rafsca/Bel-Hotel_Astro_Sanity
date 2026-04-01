import { AlignLeft, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleNavClick = () => {
        setIsClicked(!isClicked);
    };
  return (
    <header className="fixed top-0 z-[500] w-full border-b border-white/10 bg-background/75 backdrop-blur-md">
    <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <a className="text-200 font-800 z-10 inline-block" href="/">
        <span className="text-primary">BEL</span>HOTEL
        </a>

        {/* Navigation */}
        <Navbar isOpen={isClicked} toggleNavClick={toggleNavClick} />

        <div className="flex items-center gap-4 justify-start">
            <a href="/contact" className="hover:text-primary transition-colors duration-300">Prenota</a>

            {/* Mode Toggle */}
            <ModeToggle />

            {/* Menu Button */}
            <div className="inline-block lg:hidden" onClick={toggleNavClick}>
                {
                    isClicked ? (
                    <X name="close menu" cursor="pointer" size={26} className="translate-y-1 md:translate-y-0"/>
                    ) : (
                    <AlignLeft name="open menu" cursor="pointer" size={26} className="translate-y-1 md:translate-y-0"/>
                    )
                }
                
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header