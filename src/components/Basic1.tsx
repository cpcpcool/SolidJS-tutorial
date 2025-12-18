import { Component, createSignal, createEffect, createMemo, Show } from 'solid-js';

const Basic1: Component = () => {
  console.log('App 실행');

  const [count, setCount] = createSignal<number>(0);

  const double = createMemo<number>(() => {
    console.log('double 계산');
    return count() * 2;
  });

  createEffect(() => {
    console.log('Basic1 effect 실행, count:', count());
  });

  const increment = (): void => {
    setCount(count() + 1);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 1. Signal (기본 상태)</h2>
        <h2>STEP 2. Memo & Effect (반응성 핵심)</h2>

        <p>count: {count()}</p>
        <p>double: {double()}</p>

        <button onClick={increment}>+</button>
      </div>

      <hr />

    </>
  );
};

export default Basic1;
