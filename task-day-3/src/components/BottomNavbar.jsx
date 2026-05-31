import { bottomNavData } from "../assets/bottom_navbar_data";

export default function BottomNavbar() {
    return (
        <div className="h-16 w-full bg-neutral-950 border-t border-neutral-700 text-white flex items-center justify-evenly">
            {
                bottomNavData.map(navItem => (
                    <div key={navItem.id} className={`${navItem.active && 'text-yellow-300 border-t-2'} flex-1 flex flex-col items-center gap-1`}>
                        <navItem.icon size={24} />
                        <p className="uppercase text-xs font-semibold">{navItem.label}</p>
                    </div>
                ))
            }

        </div>
    )
}
