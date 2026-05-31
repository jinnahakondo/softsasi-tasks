import { logo } from "../assets/logo";


export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="CubicSec logo" className="h-8 w-8 " />
            <h2 className="text-2xl font-bold tracking-tighter">CubicSec</h2>
        </div>
    )
}
