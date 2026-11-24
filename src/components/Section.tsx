import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, lede, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__header">
        <p className="section__eyebrow">{eyebrow}</p>
        <h2 className="section__title">{title}</h2>
        <p className="section__lede">{lede}</p>
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
}
