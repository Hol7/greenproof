import Image from "next/image";
import { IoArrowForward, IoArrowDown, IoLogoApple, IoLogoGooglePlaystore, IoLeaf, IoLocationOutline } from "react-icons/io5";
import { Brand } from "@/components/Logo";


export default function Home() {
  return <main id="haut" className="landing">
    <header className="mast wrap">
      <a href="#haut" aria-label="Greenproof, accueil"><Brand/></a>
      <nav aria-label="Navigation principale"><a href="#terrain">Sur le terrain</a><a href="#pilote">Le pilote</a></nav>
      <a className="pill-link" href="/demo">Voir la démo <IoArrowForward/></a>
    </header>
    <section className="intro" aria-labelledby="titre">
      <h1 id="titre">Aucun arbre<br/><em>sans suivi.</em></h1>
      <p>Un QR code par arbre pour guider les tournées<br className="desktop-break"/> et retrouver les contrôles en retard.</p>
      <a className="action" href="#terrain">Découvrir le fonctionnement <IoArrowDown/></a>
    </section>
    <section className="terrain wrap" id="terrain">
      <div className="terrain-copy"><h2>Tout commence<br/>par un scan.</h2>
        <p>Au pied de l’arbre, l’agent scanne la plaquette et relève l’état du sol, des feuilles et le dernier arrosage.</p>
        <a href="#tournee">Après le relevé <IoArrowDown/></a>
      </div>
      <Image src="/images/agent-terrain.webp" width={1536} height={1024} sizes="(max-width: 760px) 94vw, 58vw" priority alt="Un agent accroupi vise avec son téléphone la plaquette QR installée à côté d’un jeune arbre."/>
    </section>
    <section className="localisation wrap" id="localisation" aria-labelledby="localisation-title">
      <div className="localisation-heading">
        <h2 id="localisation-title">Chaque arbre<br/><em>a sa place.</em></h2>
        <p>Retrouvez les arbres et les espaces verts de Cotonou sur une carte, et repérez les lieux qui nécessitent un suivi.</p>
      </div>
      <figure className="city-map">
        <iframe title="Fond de carte de Cotonou" src="https://www.openstreetmap.org/export/embed.html?bbox=2.345%2C6.335%2C2.465%2C6.395&amp;layer=mapnik" loading="lazy" tabIndex={-1} aria-hidden="true" />
        <div className="city-map-wash" />
        <span className="city-map-location"><IoLocationOutline/> Cotonou, Bénin</span>
        <div className="map-trees" aria-hidden="true">
          <span className="map-tree map-tree-main"><IoLeaf/><span className="map-tree-label"><strong>Arbre de Fifadji</strong><small>Jardin public · Cotonou</small></span></span>
          <span className="map-tree map-tree-two"><IoLeaf/></span>
          <span className="map-tree map-tree-three map-tree-watch"><IoLeaf/></span>
          <span className="map-tree map-tree-four"><IoLeaf/></span>
          <span className="map-tree map-tree-five map-tree-priority"><IoLeaf/></span>
          <span className="map-tree map-tree-six map-tree-unknown"><IoLeaf/></span>
        </div>
        <figcaption className="city-map-note">Aperçu du concept · Repères illustratifs</figcaption>
        <a className="city-map-credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap</a>
      </figure>
    </section>
    <section className="tournee wrap" id="tournee">
      <h2>Préparer la<br/><em>prochaine tournée.</em></h2>
      <div><p>Le responsable voit quels arbres demandent une intervention et lesquels attendent encore leur contrôle. Après l’arrosage, une nouvelle visite permet de vérifier l’état du sol.</p>
      <a className="inline" href="/demo">Explorer un secteur de démonstration <IoArrowForward/></a></div>
    </section>
    <section className="pilote wrap" id="pilote"><h2>Le pilote au Bénin</h2>
      <dl><div><dt>Arbres à suivre</dt><dd>150</dd></div><div><dt>Durée proposée</dt><dd>3 <small>mois</small></dd></div><div><dt>Budget cible entre</dt><dd className="budget-amount">250000 et 1000000 <small>FCFA</small></dd></div></dl>
    </section>
    <footer className="wrap bottom"><div><Brand/><p>Suivi des arbres urbains au Bénin.</p></div>
      <div className="stores"><small>Application mobile en projet</small><div><span><IoLogoApple/> App Store</span><span><IoLogoGooglePlaystore/> Google Play</span></div></div>
    </footer>
  </main>;
}
