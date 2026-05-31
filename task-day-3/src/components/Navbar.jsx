import { MdTerminal } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import Logo from "./Logo";


export default function Navbar() {
    return (
        <div className="h-20 px-4 flex items-center justify-between border-b border-b-neutral-700 text-yellow-300">
            {/* logo */}
            <Logo />
            {/* icon links */}
            <div className="flex items-center gap-2">
                <MdOutlineShield size={24} />
                <MdTerminal size={24} />
            </div>
        </div>
    )
}
