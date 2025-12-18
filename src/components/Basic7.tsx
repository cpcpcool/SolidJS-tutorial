import { Component, createSignal, createEffect, createMemo, Show, For, onMount, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

const Basic7: Component = () => {
  let timer: number;

  onMount(() => {
    console.log('mounted');
    timer = window.setInterval(() => {
      console.log('tick');
    }, 1000);
  });

  onCleanup(() => {
    console.log('cleanup');
    clearInterval(timer);
  });


  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 7. onMount / onCleanup (라이프사이클 제어)</h2>
        <ul>
          <li>{`React useEffect(() => {}, []) 대체`}</li>
          <li>effect 남용 방지</li>
          <li>DOM / 이벤트 / 타이머 안전 관리</li>
        </ul>

        <div>onMount test</div>
      </div>

      <hr />
      <ul>
        <li>mount 시 1회 실행</li>
        <li>언마운트 시 cleanup</li>
        <li>SSR-safe</li>
      </ul>
    </>
  );
};

export default Basic7;