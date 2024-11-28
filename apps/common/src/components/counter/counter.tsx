import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div style={{ paddingTop: "100px" }}>
      bro
      <p>Count: {count.value}</p>
      <p>
        <button onClick$={() => count.value++}>Increment</button>
      </p>
    </div>
  );
});
