

export default function Threat({ id, active, badge, title, actions }) {
    return (
        <div className="border border-l-6 border-yellow-300 p-4 bg-neutral-900 shadow">
            <div className="flex items-center justify-between mb-2">
                <p className="uppercase text-white font-semibold">{id}</p>
                <p className={`text-xs font-semibold px-2 py-0.5 border  text-neutral-300 ${active && "border-yellow-300"}`}>{badge}</p>
            </div>

            <p className="text-sm text-neutral-300 mb-4">{title}</p>
            <p className="text-yellow-300 mb-4">{status}</p>
            <button className={`py-3 border border-neutral-700 w-full text-neutral-300 ${active ? 'bg-yellow-200 text-neutral-950' : 'bg-neutral-950'}`}>{actions}</button>
        </div>
    )
}
