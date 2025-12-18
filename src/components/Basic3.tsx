import { Component, createSignal, createEffect, createMemo, Show } from 'solid-js';

const Basic3: Component = () => {
  console.log('App 실행');

  const [count, setCount] = createSignal<number>(0);
  createEffect(() => {
    console.log('Basic3 effect 실행, count:', count());
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 3. 조건 렌더링 (Show)</h2>

        <button onClick={() => setCount(count() + 1)}>+</button>

        <Show when={count() > 0} fallback={<p>zero</p>}>
          <p>positive: {count()}</p>
        </Show>
      </div>
    </>
  );
};

export default Basic3;
