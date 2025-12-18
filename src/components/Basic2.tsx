import { Component, createSignal, createEffect, createMemo, Show } from 'solid-js';

const Basic2: Component = () => {
  console.log('App 실행');

  const [count, setCount] = createSignal<number>(0);

  const double = createMemo<number>(() => {
    console.log('double 계산');
    return count() * 2;
  });

  createEffect(() => {
    console.log('effect 실행, count:', count());
  });

  const increment = (): void => {
    setCount(count() + 1);
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 2. Memo & Effect (반응성 핵심)</h2>

        <p>count: {count()}</p>
        <p>double: {double()}</p>
        <button onClick={() => setCount(count() + 1)}>+</button>
      </div>
      <hr />
    </>
  );
};

export default Basic2;
