import { Component, createSignal, createEffect, createMemo, Show, For } from 'solid-js';

const Basic4: Component = () => {
  
  const [items, setItems] = createSignal<number[]>([1, 2, 3]);

  const addItem = () => {
    setItems([...items(), items().length + 1]);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 4. 리스트 렌더링 (For)</h2>

        <button onClick={addItem}>add</button>

        <ul>
          <For each={items()}>
            {(item) => <li>{item}</li>}
          </For>
        </ul>
      </div>
    </>
  );
};

export default Basic4;