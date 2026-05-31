import { IoShieldHalf } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { MdTerminal } from "react-icons/md";

export const bottomNavData = [
    {
        id: 1,
        icon: IoShieldHalf,
        label: "Command",
        active: false
    },
    {
        id: 2,
        icon: MdDashboard,
        label: "Control",
        active: true
    },
    {
        id: 3,
        icon: SlEnergy,
        label: "Response",
        active: false
    },
    {
        id: 4,
        icon: MdTerminal,
        label: "Logs",
        active: false
    },
]