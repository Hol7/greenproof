"use client";

import { useEffect, useState, type FormEvent } from "react";
import { IoCheckmark, IoCheckmarkCircleOutline } from "react-icons/io5";

const questions = [
  { id: "soil", label: "Comment est le sol ?", options: ["Sec", "Humide", "Détrempé", "Non observé"] },
  { id: "leaves", label: "Comment sont les feuilles ?", options: ["Normales", "Flétries", "Jaunies", "Tachées", "Non observées"] },
  { id: "water", label: "Arrosé aujourd’hui ?", options: ["Oui", "Non", "Je ne sais pas"] },
] as const;

type Answers = Partial<Record<(typeof questions)[number]["id"], string>>;

export default function Actions() {
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const ready = questions.every(({ id }) => Boolean(answers[id]));

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => window.location.assign("/"), 1500);
    return () => clearTimeout(timer);
  }, [done]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (ready) setDone(true);
  }

  if (done) return <p className="signal-success" role="status"><IoCheckmarkCircleOutline aria-hidden/> Observation simulée. Retour à l’accueil…</p>;

  return (
    <section className="field-actions">
      <h2>Votre observation</h2>
      <p>Choisissez un constat par question. Ce relevé est une simulation.</p>
      <form onSubmit={submit}>
        {questions.map(({ id, label, options }) => (
          <fieldset className="observation-group" key={id}>
            <legend>{label}</legend>
            <div className="observation-options">
              {options.map(option => {
                const selected = answers[id] === option;
                return <button type="button" key={option} aria-pressed={selected}
                  onClick={() => setAnswers(previous => ({ ...previous, [id]: option }))}>
                  {selected && <IoCheckmark aria-hidden/>}{option}
                </button>;
              })}
            </div>
          </fieldset>
        ))}
        <div className="button-pair">
          <button className="confirm-tree" type="submit" disabled={!ready}>Valider mon observation</button>
        </div>
      </form>
    </section>
  );
}
