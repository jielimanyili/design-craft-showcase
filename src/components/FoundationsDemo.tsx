const swatches = [
  { name: "gray-100", hex: "#f4f4f5" },
  { name: "gray-200", hex: "#e4e4e7" },
  { name: "gray-300", hex: "#d4d4d8" },
  { name: "gray-500", hex: "#71717a" },
  { name: "gray-700", hex: "#3f3f46" },
  { name: "gray-900", hex: "#18181b" },
  { name: "indigo-100", hex: "#e0e7ff" },
  { name: "indigo-500", hex: "#6366f1" },
  { name: "indigo-600", hex: "#4f46e5" },
  { name: "indigo-700", hex: "#4338ca" },
  { name: "green-600", hex: "#16a34a" },
  { name: "red-600", hex: "#dc2626" },
];

const spacing = [
  { token: "space-1", px: 4 },
  { token: "space-2", px: 8 },
  { token: "space-3", px: 12 },
  { token: "space-4", px: 16 },
  { token: "space-5", px: 20 },
  { token: "space-6", px: 24 },
  { token: "space-8", px: 32 },
  { token: "space-12", px: 48 },
];

export function FoundationsDemo() {
  return (
    <div className="foundations">
      <div className="foundations__block">
        <h3 className="foundations__label">Color — one accent, disciplined neutrals</h3>
        <ul className="swatches">
          {swatches.map((s) => (
            <li className="swatch" key={s.name}>
              <span className="swatch__chip" style={{ background: s.hex }} />
              <span className="swatch__name">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="foundations__block">
        <h3 className="foundations__label">Spacing — a 4px scale, no ad-hoc values</h3>
        <ul className="spacing">
          {spacing.map((s) => (
            <li className="spacing__row" key={s.token}>
              <span className="spacing__token">{s.token}</span>
              <span className="spacing__bar" style={{ width: `${s.px * 3}px` }} />
              <span className="spacing__px">{s.px}px</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
