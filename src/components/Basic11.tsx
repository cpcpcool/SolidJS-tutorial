import { Component, createSignal, createEffect, createMemo, Show, For, onMount, onCleanup, untrack, batch, createResource, Switch, Match } from 'solid-js';

const fetchUser = async (id: number) => {
  return new Promise<{ name: string }>((res) =>
    setTimeout(() => res({ name: `user-${id}` }), 1000)
  );
};

const Basic11: Component = () => {
  const [status, setStatus] = createSignal<'idle' | 'loading' | 'done'>('idle');

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 11. {`<Switch> / <Match>`} (복잡한 조건 분기)</h2>

        <button onClick={() => setStatus('loading')}>loading</button>
        <button onClick={() => setStatus('done')}>done</button>

        <Switch fallback={<p>idle</p>}>
          <Match when={status() === 'loading'}>
            <p>loading...</p>
          </Match>
          <Match when={status() === 'done'}>
            <p>done!</p>
          </Match>
        </Switch>
      </div>
    </>
  );
};

export default Basic11;