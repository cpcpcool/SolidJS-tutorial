import { Component, createSignal, createEffect, createMemo, Show, For } from 'solid-js';
import { createStore } from 'solid-js/store';

const Basic6: Component = () => {
  
  createEffect(() => {
    console.log('window 접근 가능:', window.location.href);
  });

  return (
    <>
      <h2>STEP 6. 서버/클라이언트 안전 패턴 (Vinxi 필수)</h2>
      <div>Safe Solid</div>
    </>

  );
};

export default Basic6;