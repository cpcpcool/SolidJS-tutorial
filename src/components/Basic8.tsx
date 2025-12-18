import { Component, createSignal, createEffect, createMemo, Show, For, onMount, onCleanup, untrack } from 'solid-js';
import { createStore } from 'solid-js/store';

const Basic8: Component = () => {
  const [count, setCount] = createSignal(0);

  // count() 값을 최초에 읽지만 의존성으로 등록하지 않음
  createEffect(() => {
    const snapshot = untrack(() => count());
    console.log('untracked snapshot:', snapshot);
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 8. untrack (반응성 의존성 제어)</h2>
        <ul>
          <li>effect 안에서 값은 읽지만</li>
          <li>의존성으로 등록하지 않기</li>
        </ul>

        <button onClick={() => setCount(count() + 1)}>
          {count()}
        </button>
      </div>

      <hr />
      <ul>
        <li>count() → 의존성 등록</li>
        <li>untrack 내부 → 의존성 ❌</li>
      </ul>
    </>
  );
};

export default Basic8;