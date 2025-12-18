import { Component, createSignal, createEffect, createMemo, Show, For, onMount, onCleanup, untrack, batch } from 'solid-js';
import { createStore } from 'solid-js/store';

const Basic9: Component = () => {
  const [a, setA] = createSignal(0);
  const [b, setB] = createSignal(0);

  const update = () => {
    batch(() => {
      setA(a() + 1);
      setB(b() + 1);
    });
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 9. batch (여러 상태 변경 묶기)</h2>
        <ul>
            <li>batch로 중간 렌더 방지</li>
            <li>이벤트 핸들러에서 여러 setState를 최적화</li>
        </ul>

        <p>a: {a()}</p>
        <p>b: {b()}</p>
        <button onClick={update}>batch update</button>

      </div>
      <hr />
      <ul>
        <li>렌더 1회, memo/effect도 1회</li>
      </ul>
    </>
  );
};

export default Basic9;