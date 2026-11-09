"use client";
import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Clock3, Droplets, Filter, LocateFixed, MapPin, Search, TreeDeciduous } from "lucide-react";

type Status = "ok" | "watch" | "priority" | "unknown";
type Tree = { id: string; site: string; status: Status; last: string; soil: string; x: number; y: number };
const trees: Tree[] = [
 {id:"GP-001",site:"Jardin pilote A",status:"ok",last:"Aujourd’hui",soil:"Humide",x:17,y:26},
 {id:"GP-027",site:"Alignement B",status:"priority",last:"Aujourd’hui",soil:"Sec",x:42,y:40},
 {id:"GP-039",site:"Jardin pilote A",status:"watch",last:"Hier",soil:"À vérifier",x:32,y:72},
 {id:"GP-052",site:"Alignement B",status:"unknown",last:"8 jours",soil:"Non relevé",x:68,y:28},
 {id:"GP-068",site:"Jardin pilote A",status:"ok",last:"Aujourd’hui",soil:"Humide",x:74,y:65},
 {id:"GP-093",site:"Alignement B",status:"watch",last:"Hier",soil:"Sec",x:85,y:37},
 {id:"GP-101",site:"Jardin pilote A",status:"ok",last:"Aujourd’hui",soil:"Humide",x:55,y:76},
 {id:"GP-112",site:"Alignement B",status:"unknown",last:"9 jours",soil:"Non relevé",x:18,y:65},
];
const labels: Record<Status,string> = {ok:"Suivi à jour", watch:"À contrôler", priority:"Prioritaire", unknown:"Suivi manquant"};
export default function TreeMonitor() {
 const [filter,setFilter]=useState<Status|"all">("all");
 const [selected,setSelected]=useState("GP-027");
 const [search,setSearch]=useState("");
 const filtered=useMemo(()=>trees.filter(t=>(filter==="all"||t.status===filter) && `${t.id} ${t.site}`.toLowerCase().includes(search.toLowerCase())),[filter,search]);
 const active=trees.find(t=>t.id===selected)??trees[1];
 return <div className="monitor" aria-label="Démonstration interactive de l'interface GREENPROOF">
   <div className="monitor__nav"><div className="monitor__nav-top"><span className="monitor__nav-mark">G<span>•</span></span><span>GREENPROOF</span></div><div className="monitor__nav-link monitor__nav-link--active"><LocateFixed size={16}/> Vue d’ensemble</div><div className="monitor__nav-link"><TreeDeciduous size={16}/> Inventaire</div><div className="monitor__nav-link"><Clock3 size={16}/> Historique</div><div className="monitor__nav-footer">DÉMONSTRATION<br/><strong>DONNÉES FICTIVES</strong></div></div>
   <div className="monitor__main">
     <div className="monitor__header"><div><span className="eyebrow">ESPACE GESTIONNAIRE / APERÇU</span><h3>Suivi des arbres</h3></div><span className="monitor__site"><MapPin size={15}/> Secteur pilote · Cotonou</span></div>
     <div className="monitor__metrics"><div><small>Arbres illustrés</small><strong>08</strong><span>Jeu de démonstration</span></div><div><small>Contrôles prioritaires</small><strong>01</strong><span className="red-dot">● À vérifier</span></div><div><small>Suivi manquant</small><strong>02</strong><span>Au-delà du délai prévu</span></div></div>
     <div className="monitor__controls"><div className="searchbox"><Search size={16}/><input placeholder="Rechercher un arbre" value={search} onChange={e=>setSearch(e.target.value)} aria-label="Rechercher un arbre"/></div><div className="filtergroup"><Filter size={15}/><select value={filter} onChange={e=>setFilter(e.target.value as Status|"all")} aria-label="Filtrer par statut"><option value="all">Tous les états</option><option value="ok">Suivi à jour</option><option value="watch">À contrôler</option><option value="priority">Prioritaire</option><option value="unknown">Suivi manquant</option></select></div></div>
     <div className="monitor__workspace"><div className="monitor__map"><div className="monitor__map-top"><span>PLAN DE SECTEUR</span><span>ILLUSTRATION NON GÉOGRAPHIQUE</span></div><svg className="roads" viewBox="0 0 650 360" preserveAspectRatio="none" aria-hidden="true"><rect width="650" height="360" fill="#eff1e8"/><path d="M-30 75 680 105 M-30 258 680 225 M96 -40 130 400 M290 -40 270 400 M455 -40 478 400" stroke="#fff" strokeWidth="24" fill="none"/><path d="M-20 32 680 340 M-20 310 610 -20" stroke="#ffffff" strokeWidth="11" fill="none"/><path d="M-20 172 680 155 M205 -10 195 400 M560 -20 550 400" stroke="#fff" strokeWidth="8" fill="none"/><path d="M0 0 110 0 142 55 95 108 0 110Z M520 245 650 220 650 360 565 360Z M340 12 418 16 403 90 338 85Z" fill="#d5e3c7"/><path d="M0 170 650 190 M0 281 650 265" stroke="#d7ded1" strokeWidth="1.5" strokeDasharray="5 8"/></svg>
       {filtered.map(t=><button key={t.id} type="button" className={`treepin treepin--${t.status} ${selected===t.id?"treepin--selected":""}`} style={{left:`${t.x}%`,top:`${t.y}%`}} onClick={()=>setSelected(t.id)} aria-label={`${t.id} : ${labels[t.status]}`} title={`${t.id} · ${labels[t.status]}`}><TreeDeciduous size={16} strokeWidth={2.3}/></button>)}
       <div className="monitor__map-badge">Carte schématique · données fictives</div>
      </div><div className="monitor__detail"><div className="monitor__detail-top"><span>FICHE ARBRE</span><ArrowUpRight size={17}/></div><h4>{active.id}</h4><div className={`status-pill status-pill--${active.status}`}><span/> {labels[active.status]}</div><dl><dt>Zone</dt><dd>{active.site}</dd><dt>Dernier relevé</dt><dd>{active.last}</dd><dt>Observation sol</dt><dd>{active.soil}</dd></dl><div className="detail-note"><Droplets size={18}/><span>{active.status==="unknown"?"Contrôle terrain à programmer : les données ne sont plus récentes.":active.status==="priority"?"Vérifier le besoin en eau avant toute intervention.":active.status==="watch"?"Observation complémentaire nécessaire.":"Aucun besoin urgent signalé dans le dernier relevé."}</span></div><div className="detail-checked"><Check size={14}/> Observations horodatées</div></div></div>
     <div className="monitor__legend"><span><i className="status-circle ok"/> Suivi à jour</span><span><i className="status-circle watch"/> À contrôler</span><span><i className="status-circle priority"/> Prioritaire</span><span><i className="status-circle unknown"/> Suivi manquant</span></div>
   </div>
 </div>;
}
