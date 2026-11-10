import {IoCheckmarkCircleOutline, IoEyeOutline, IoWaterOutline, IoTimeOutline} from "react-icons/io5";
import {statusLabels,type Tree} from "./data";
const icons={ok:IoCheckmarkCircleOutline,watch:IoEyeOutline,priority:IoWaterOutline,unknown:IoTimeOutline};
export default function Status({state}:{state:Tree["state"]}){
  const Icon=icons[state];
  return <span className={'tree-status tone-'+state}><Icon aria-hidden/>{statusLabels[state]}</span>;
}
