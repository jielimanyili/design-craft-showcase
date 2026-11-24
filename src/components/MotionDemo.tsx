import { useEffect, useState } from "react";
import { Button } from "./Button";
import { IconCheck, IconChevronDown, IconPlus } from "./Icons";

const listItems = [
  "Funds received",
  "Card locked — suspicious activity",
  "New virtual card issued",
  "Policy updated",
  "Receipt matched",
];

const tabs = ["Overview", "Spend", "Cards"];

export function MotionDemo() {
  const [replay, setReplay] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="motion">
      <div className="motion__grid">
        <div className="panel">
          <div className="panel__head">
            <h3 className="panel__title">Staggered entrance</h3>
            <Button variant="secondary" size="sm" onClick={() => setReplay((n) => n + 1)}>
              Replay
            </Button>
          </div>
          <ul className="stagger" key={replay}>
            {listItems.map((item, i) => (
              <li className="stagger__item" key={item} style={{ animationDelay: `${i * 60}ms` }}>
                <span className="stagger__dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="panel__head">
            <h3 className="panel__title">Sliding indicator</h3>
          </div>
          <div className="tabs" role="tablist" aria-label="Demo tabs">
            <span
              className="tabs__indicator"
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${activeTab * 100}%)`,
              }}
            />
            {tabs.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === i}
                className={`tabs__tab${activeTab === i ? " is-active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="motion__note">The indicator slides; it doesn't blink.</p>
        </div>

        <div className="panel">
          <div className="panel__head">
            <h3 className="panel__title">Accordion</h3>
          </div>
          <button className="accordion" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span>Why is this card flagged?</span>
            <IconChevronDown size={18} className={`accordion__chevron${open ? " is-open" : ""}`} />
          </button>
          <div className={`accordion__body${open ? " is-open" : ""}`}>
            <div className="accordion__inner">
              A $2,100 charge from an unrecognized merchant triggered the risk rule. We locked the
              card until you confirm the charge is yours.
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel__head">
            <h3 className="panel__title">Toast</h3>
          </div>
          <div className="toast-demo">
            <Button variant="secondary" size="sm" onClick={() => setToast(true)}>
              <IconPlus size={14} />
              Show toast
            </Button>
            {toast ? (
              <div className="toast" role="status">
                <span className="toast__icon">
                  <IconCheck size={14} />
                </span>
                Changes saved
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <p className="demo-note">
        Every transition respects <code>prefers-reduced-motion</code> — turn it on in your OS and the
        motion collapses to instant.
      </p>
    </div>
  );
}
