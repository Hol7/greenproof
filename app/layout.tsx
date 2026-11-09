import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GREENPROOF — Aucun arbre sans suivi",
  description: "GREENPROOF aide les équipes à identifier, suivre et prioriser l'entretien des arbres urbains grâce à un QR code et à un relevé mobile.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
