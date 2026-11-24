import { Section } from "./components/Section";
import { FoundationsDemo } from "./components/FoundationsDemo";
import { TypographyDemo } from "./components/TypographyDemo";
import { DensityDemo } from "./components/DensityDemo";
import { MotionDemo } from "./components/MotionDemo";
import { StatesDemo } from "./components/StatesDemo";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav" aria-label="Primary">
          <div className="container nav__inner">
            <a className="nav__brand" href="#top">
              Design Craft
            </a>
            <div className="nav__links">
              <a href="#typography">Type</a>
              <a href="#density">Density</a>
              <a href="#motion">Motion</a>
              <a href="#states">States</a>
            </div>
          </div>
        </nav>

        <div className="container hero__inner">
          <p className="hero__eyebrow">A living craft showcase</p>
          <h1 className="hero__title">Design judgment, made visible.</h1>
          <p className="hero__lede">
            Tokens, typography, density, motion, and the states beyond the happy path — the things
            that separate a component library from a product that feels right.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#typography">
              Explore the craft
            </a>
            <a className="btn btn--secondary" href="#states">
              See the states
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="main container">
        <Section
          id="foundations"
          eyebrow="Foundations"
          title="One source, disciplined scales"
          lede="Primitive tokens → semantic roles → component decisions. No one-off values."
        >
          <FoundationsDemo />
        </Section>

        <Section
          id="typography"
          eyebrow="Typography"
          title="A type scale with intent"
          lede="Hierarchy comes from a small number of well-chosen sizes, weights, and spacing — not from more fonts."
        >
          <TypographyDemo />
        </Section>

        <Section
          id="density"
          eyebrow="Density"
          title="Data-dense, not data-cramped"
          lede="Density is a system decision, not a CSS hack. Same information, two comfortable resolutions."
        >
          <DensityDemo />
        </Section>

        <Section
          id="motion"
          eyebrow="Motion"
          title="Motion with meaning"
          lede="Every movement communicates state, direction, or consequence — and respects reduced motion."
        >
          <MotionDemo />
        </Section>

        <Section
          id="states"
          eyebrow="States"
          title="Beyond the happy path"
          lede="The design is only as good as its worst state. Loading, empty, error, disabled, and focus are first-class."
        >
          <StatesDemo />
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer__brand">Design Craft</p>
          <p className="footer__note">
            A hand-built craft showcase — tokens, type, density, motion, and states. No UI framework,
            just design tokens and intent.
          </p>
        </div>
      </footer>
    </div>
  );
}
