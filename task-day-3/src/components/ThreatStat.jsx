

export default function ThreatStat({ label, count, active }) {
    return (
        <div className="border border-neutral-700 p-4 text-neutral-300">
            <h4 className="mb-1 tracking-widest text-xs uppercase font-semibold">{label}</h4>
            <p className={`${active && 'text-yellow-300'} text-2xl font-bold`}>
                {count < 10 ? "0" + count : count}
            </p>
        </div>
    )
}
