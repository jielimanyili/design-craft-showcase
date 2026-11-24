import { Button } from "./Button";
import { TextField } from "./TextField";
import { IconAlert, IconCheck, IconReceipt, IconSearch } from "./Icons";

export function StatesDemo() {
  return (
    <div className="states">
      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Buttons — every state</h3>
        </div>
        <div className="states__row">
          <Button>Default</Button>
          <Button className="is-hover-demo">Hover</Button>
          <Button className="is-active-demo">Active</Button>
          <Button className="is-focus-demo">Focus</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <div className="states__row" style={{ marginTop: "var(--space-4)" }}>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive" disabled>
            Destructive disabled
          </Button>
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Inputs — states beyond the happy path</h3>
        </div>
        <div className="states__inputs">
          <TextField label="Cardholder name" placeholder="Ada Lovelace" hint="As printed on the card" />
          <TextField label="Card number" placeholder="4242 4242 4242 4242" leading={<IconSearch size={16} />} />
          <TextField label="CVC" placeholder="•••" error="Enter the 3-digit code on the back." />
          <TextField label="Billing ZIP" placeholder="94105" success="Looks valid." trailing={<IconCheck size={16} />} />
          <TextField label="Email" placeholder="ada@example.com" disabled />
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Loading — skeleton, not spinner</h3>
        </div>
        <div className="skeleton-list" aria-hidden="true">
          <span className="skeleton skeleton--avatar" />
          <span className="skeleton skeleton--line" style={{ width: "60%" }} />
          <span className="skeleton skeleton--line" style={{ width: "35%" }} />
        </div>
        <div className="skeleton-list" aria-hidden="true">
          <span className="skeleton skeleton--avatar" />
          <span className="skeleton skeleton--line" style={{ width: "50%" }} />
          <span className="skeleton skeleton--line" style={{ width: "40%" }} />
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Empty</h3>
        </div>
        <div className="state-card">
          <span className="state-card__icon">
            <IconReceipt size={22} />
          </span>
          <h4 className="state-card__title">No receipts yet</h4>
          <p className="state-card__copy">Receipts you match to transactions will appear here.</p>
          <Button variant="secondary" size="sm">
            Match a receipt
          </Button>
        </div>
      </div>

      <div className="panel">
        <div className="panel__head">
          <h3 className="panel__title">Error</h3>
        </div>
        <div className="banner banner--error" role="alert">
          <span className="banner__icon">
            <IconAlert size={18} />
          </span>
          <div className="banner__body">
            <h4 className="banner__title">We couldn't link your bank</h4>
            <p className="banner__copy">
              The connection timed out. Your data is safe — nothing was changed.
            </p>
            <div className="banner__actions">
              <Button variant="secondary" size="sm">
                Try again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
