import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Counter } from "@common";

export default component$(() => {
  const count = useSignal(0);
  return (
    <>
      <h1>Anything 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        <Counter />
        <div>{count.value}</div>
        <div onClick$={() => (count.value += 1)}>Increment</div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
