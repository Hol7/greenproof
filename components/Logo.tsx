import React from "react";

export function BrandMark({ size = 38, light = false }: {size?: number; light?: boolean}) {
  return <svg width={size} height={size} viewBox="0 0 48 48" fill="none" role="img" aria-label="Symbole GREENPROOF : deux feuilles">
    <path d="M24 43V23" stroke={light ? "#F6F8EC" : "#073B2B"} strokeWidth="3.5" strokeLinecap="square" />
    <path d="M23 25C9 24 6 16 7 5c12 0 20 5 20 16l-4 4Z" fill="#ACF344"/>
    <path d="M25 30C27 15 36 11 45 11c-1 12-6 19-18 21l-2-2Z" fill={light ? "#EDF8D5" : "#0D774B"}/>
  </svg>;
}
export function Brand({ light = false }: {light?: boolean}) {
  return <span className="brand"><BrandMark size={35} light={light}/><span className="brand__word">GREEN<span>PROOF</span></span></span>;
}
