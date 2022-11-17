import { DBButton, DBIcon } from "../../../packages/core/output/preact/src";

export function App() {
  return (
    <main>
      <h1>Preact</h1>
      <div>
        <DBButton variant="secondary">Test</DBButton>
        <DBButton text="Test" icon="account" />
        <DBIcon icon="account" />
      </div>
    </main>
  );
}
