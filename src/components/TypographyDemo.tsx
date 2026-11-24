const specimens = [
  { label: "Display", className: "specimen--display", sample: "Ag 24", note: "2.5rem · 650 · −0.02em" },
  { label: "Title", className: "specimen--title", sample: "Statement — March 2026", note: "1.75rem · 600" },
  { label: "Heading", className: "specimen--heading", sample: "Uncategorized spend", note: "1.25rem · 600" },
  { label: "Body", className: "specimen--body", sample: "Design judgment scales when encoded as patterns people reuse.", note: "15px · 1.55" },
  { label: "Label", className: "specimen--label", sample: "Account ending 4242", note: "12px · 500 · caps" },
  { label: "Caption", className: "specimen--caption", sample: "Updated 2m ago", note: "11px · secondary" },
  { label: "Mono", className: "specimen--mono", sample: "amount = 1284.09", note: "tabular · SF Mono" },
];

const amounts = ["$1,284.09", "$24,500.00", "$6.75", "$612.40"];

export function TypographyDemo() {
  return (
    <div className="type">
      <div>
        {specimens.map((s) => (
          <div className="specimen" key={s.label}>
            <div className="specimen__meta">
              <span className="specimen__label">{s.label}</span>
              <span className="specimen__note">{s.note}</span>
            </div>
            <div className={`specimen__sample ${s.className}`}>{s.sample}</div>
          </div>
        ))}
      </div>

      <div className="type__side">
        <div className="panel">
          <h3 className="panel__title">Tabular numerals</h3>
          <p className="panel__copy">Amounts align in a column — every glyph occupies the same width.</p>
          <ul className="amounts">
            {amounts.map((a) => (
              <li className="amounts__item tnum" key={a}>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3 className="panel__title">Hierarchy in context</h3>
          <div className="hierarchy">
            <span className="hierarchy__eyebrow">Statement</span>
            <div className="hierarchy__value tnum">$22,938.07</div>
            <div className="hierarchy__delta tnum">▲ 4.2% vs. last month</div>
            <p className="hierarchy__note">Spend is up in Software and Travel. No policy violations detected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
