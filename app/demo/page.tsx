import Image from "next/image";
import {IoArrowForward,IoArrowBack} from "react-icons/io5";
import TreeMonitor from "@/components/TreeMonitor";
import {trees} from "../arbres/data";
import Status from "../arbres/Status";
import "./demo.css";

export default function Demo(){
  return <main className="tree-shell">
    <a className="tree-back" href="/"><IoArrowBack/> Greenproof</a>
    <header className="tree-intro"><h1>Scanner un arbre.</h1><p>Scannez une plaquette ou ouvrez sa fiche pour consulter le dernier relevé.</p></header>
    <section aria-label="Quatre arbres de démonstration" className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {trees.map(t=><article key={t.id} className="qr-card">
        <a href={'/arbres/'+t.id} className="cover-link"><Image src={t.image} alt={t.name+' · '+t.place} width={400} height={240}/></a>
        <div className="qr-body"><Status state={t.state}/><h2>{t.name}</h2><p>{t.place}</p>
        <img className="qr-image" src={'/arbres/'+t.id+'-qr.png'} width="152" height="152" alt={'QR code public de '+t.id.toUpperCase()}/>
        <a className="card-open" href={'/arbres/'+t.id}><span>{t.id.toUpperCase()}</span> Ouvrir <IoArrowForward/></a></div>
      </article>)}
    </section>
    <details className="sector-map" open><summary>Carte du secteur de démonstration</summary><TreeMonitor/></details>
  </main>
}
