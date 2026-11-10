"use client";
import {useEffect,useRef,useState,type FormEvent} from "react";
import {IoCheckmarkCircleOutline,IoFlagOutline} from "react-icons/io5";
export default function Actions(){
  const [report,setReport]=useState(false),[done,setDone]=useState(false);
  const note=useRef<HTMLTextAreaElement>(null);
  useEffect(()=>{if(report)note.current?.focus()},[report]);
  useEffect(()=>{if(!done)return;const timer=setTimeout(()=>window.location.assign("/"),1500);return ()=>clearTimeout(timer)},[done]);
  function send(e:FormEvent){e.preventDefault();if(!note.current?.value.trim()){note.current?.setCustomValidity("Précisez votre observation.");note.current?.reportValidity();return}setDone(true)}
  if(done)return <p className="signal-success" role="status"><IoCheckmarkCircleOutline/> Observation simulée. Retour à l’accueil…</p>;
  return <section className="field-actions"><h2>Votre observation</h2><p>Essai de démonstration, sans envoi.</p>
    {!report?<div className="button-pair"><button className="confirm-tree" onClick={()=>setDone(true)}><IoCheckmarkCircleOutline/> Semble en bonne santé</button><button onClick={()=>setReport(true)}><IoFlagOutline/> Signaler un problème</button></div>:
    <form onSubmit={send}><label htmlFor="signal">Qu’avez-vous remarqué ?</label><textarea id="signal" ref={note} required maxLength={400} rows={3} onChange={e=>e.target.setCustomValidity("")} placeholder="Sol sec, feuilles flétries, branche abîmée…"/><div className="button-pair"><button className="confirm-tree">Valider le signalement</button><button type="button" onClick={()=>setReport(false)}>Annuler</button></div></form>}
  </section>
}
