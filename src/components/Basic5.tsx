import { Component, createSignal, createEffect, createMemo, Show, For } from 'solid-js';
import { createStore } from 'solid-js/store';

const Basic5: Component = () => {
  
  const [state, setState] = createStore({
    user: { name: 'Kim', age: 20 },
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 5. Store (객체 상태)</h2>
        <p>deep reactive 객체 이해</p>

        <p>{state.user.name}</p>
        <button onClick={() => setState('user', 'age', (a) => a + 1)}>
          age++
        </button>
        <p>{state.user.age}</p>
      </div>
    </>
  );
};

export default Basic5;