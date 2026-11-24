import { useState } from "react";
import { IconTrendDown, IconTrendUp } from "./Icons";

interface Txn {
  merchant: string;
  category: string;
  card: string;
  date: string;
  amount: number;
}

const transactions: Txn[] = [
  { merchant: "Amazon Web Services", category: "Software", card: "•• 4242", date: "Nov 12", amount: -1284.09 },
  { merchant: "Figma", category: "Software", card: "•• 4242", date: "Nov 11", amount: -45.0 },
  { merchant: "Stripe payout", category: "Revenue", card: "•• 8890", date: "Nov 10", amount: 24500.0 },
  { merchant: "Delta Air Lines", category: "Travel", card: "•• 4242", date: "Nov 09", amount: -612.4 },
  { merchant: "Blue Bottle Coffee", category: "Meals", card: "•• 4242", date: "Nov 08", amount: -6.75 },
  { merchant: "Notion", category: "Software", card: "•• 4242", date: "Nov 07", amount: -24.0 },
  { merchant: "GitHub", category: "Software", card: "•• 8890", date: "Nov 06", amount: -19.0 },
  { merchant: "Linear", category: "Software", card: "•• 4242", date: "Nov 05", amount: -32.0 },
];

const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function DensityDemo() {
  const [dense, setDense] = useState(false);
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="density">
      <div className="density__toolbar">
        <div>
          <div className="density__total tnum">{formatter.format(total)}</div>
          <div className="density__meta">
            {transactions.length} transactions · Nov 1–12
          </div>
        </div>

        <div className="density__toggle" role="group" aria-label="Density">
          <button
            className={!dense ? "is-active" : ""}
            aria-pressed={!dense}
            onClick={() => setDense(false)}
          >
            Comfortable
          </button>
          <button
            className={dense ? "is-active" : ""}
            aria-pressed={dense}
            onClick={() => setDense(true)}
          >
            Compact
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <table className={`table${dense ? " table--dense" : ""}`}>
          <thead>
            <tr>
              <th scope="col">Merchant</th>
              <th scope="col">Category</th>
              <th scope="col">Card</th>
              <th scope="col">Date</th>
              <th scope="col" className="table__num">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={`${t.merchant}-${t.date}`}>
                <td className="table__merchant">{t.merchant}</td>
                <td>
                  <span className={`badge ${t.amount < 0 ? "badge--neutral" : "badge--success"}`}>
                    {t.category}
                  </span>
                </td>
                <td className="tnum">{t.card}</td>
                <td className="tnum">{t.date}</td>
                <td className={`table__num tnum ${t.amount < 0 ? "is-negative" : "is-positive"}`}>
                  {t.amount < 0 ? <IconTrendDown size={14} /> : <IconTrendUp size={14} />}
                  {formatter.format(t.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
