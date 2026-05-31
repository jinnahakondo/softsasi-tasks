import { threats } from "../assets/threats_data";
import Threat from "./Threat";


export default function Threats() {
    return (
        <div className="mt-8 pb-30">
            <h3 className="text-yellow-300 uppercase font-semibold border-b border-neutral-700 text-xs mb-4">Active Threats</h3>
            {/* threats  */}
            <div className="grid grid-cols-1 gap-4">
                {
                    threats.map(threat => <Threat key={threat.id} {...threat} />)
                }
            </div>
        </div>
    )
}
