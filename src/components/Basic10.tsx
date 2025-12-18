import { Component, createSignal, createEffect, createMemo, Show, For, onMount, onCleanup, untrack, batch, createResource } from 'solid-js';

const fetchUser = async (id: number) => {
  return new Promise<{ name: string }>((res) =>
    setTimeout(() => res({ name: `user-${id}` }), 1000)
  );
};

const Basic10: Component = () => {
  const [userId, setUserId] = createSignal(1);
  const [user] = createResource(userId, fetchUser);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 10. createResource (프론트 데이터 패칭)</h2>
        <ul>
            <li>loading / error 내장</li>
            <li>signal 기반 재요청</li>
        </ul>

        <button onClick={() => setUserId(userId() + 1)}>
          load user
        </button>

        <Show when={!user.loading} fallback={<p>loading...</p>}>
          <p>{user()?.name}</p>
        </Show>
      </div>

      <hr />
      <ul>
        <li>loading 상태 자동</li>
        <li>userId 변경 → 자동 재요청</li>
      </ul>
    </>
  );
};

export default Basic10;