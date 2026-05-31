import { IoShieldHalf } from "react-icons/io5";
import { threatStatsData } from "../assets/threat_stats_data";
import ThreatStat from "./ThreatStat";

export default function GridcontrolSection() {
  return (
    <div className="pt-10 md:pt-28">
      {/* header  */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 flex items-center gap-2"><IoShieldHalf size={24} />Grid Control</h2>
        <p className="text-xs text-neutral-300 ">Vulnerability scan completed. 3 critical threats detected.</p>
      </div>
      {/* threat stats  */}
      <div className="grid grid-cols-2 gap-4">
        {threatStatsData.map(stat => <ThreatStat key={stat.id} {...stat} />)}
      </div>
    </div>
  )
}
