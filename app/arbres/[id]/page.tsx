import Image from "next/image";
import {notFound} from "next/navigation";
import {IoArrowBack,IoLocationOutline,IoWaterOutline,IoCalendarOutline,IoLeafOutline,IoTimeOutline} from "react-icons/io5";
import {trees} from "../data";
import Status from "../Status";
import Actions from "../Actions";
export const dynamicParams=false;
export function generateStaticParams(){return trees.map(({id})=>({id}))}
export default async function TreePage({params}:{params:Promise<{id:string}>}){
  const {id}=await params;const tree=trees.find(t=>t.id===id);if(!tree)notFound();
  const facts=[
    {label:"Dernier contrôle",value:tree.visited,Icon:IoTimeOutline},{label:"Dernier arrosage",value:tree.watered,Icon:IoWaterOutline},
    {label:"Plantation",value:tree.planted,Icon:IoCalendarOutline},{label:"Provenance",value:tree.origin,Icon:IoLocationOutline},
    {label:"État du sol",value:tree.soil,Icon:IoWaterOutline},{label:"Feuillage",value:tree.leaves,Icon:IoLeafOutline}];
  return <main className="tree-shell tree-sheet"><a className="tree-back" href="/demo"><IoArrowBack/> Tous les arbres</a>
    <div className="sheet-grid"><figure className="tree-photo"><Image src={'/arbres/'+id+'.webp'} alt={tree.name+' · '+tree.place} width={900} height={1000} priority/>
    <figcaption><a href={'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(tree.file.replaceAll(" ","_"))}>Photo · {tree.author}</a> · <a href={id==="gp-027"?"https://creativecommons.org/publicdomain/zero/1.0/":"https://creativecommons.org/licenses/by-sa/4.0/"}>{id==="gp-027"?"CC0":"CC BY-SA 4.0"}</a></figcaption></figure>
    <section className="sheet-content"><div className="sheet-id">{id.toUpperCase()} · Fiche de démonstration</div><h1>{tree.name}</h1><p className="tree-location"><IoLocationOutline/>{tree.place}</p>
    <div className="next-visit"><Status state={tree.state}/><p>{tree.next}</p></div>
    <h2>Dernier relevé</h2><p className="field-disclaimer">Données fictives au 10 novembre 2026.</p>
    <dl className="facts">{facts.map(({label,value,Icon})=><div key={label}><dt><Icon/>{label}</dt><dd>{value}</dd></div>)}</dl>
    <Actions/></section></div></main>
}
