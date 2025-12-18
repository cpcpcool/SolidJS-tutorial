import { Component, createSignal, createEffect, createMemo, Show, For, Switch } from 'solid-js';
import Basic1 from './components/Basic1';
import Basic2 from './components/Basic2';
import Basic3 from './components/Basic3';
import Basic4 from './components/Basic4';
import Basic5 from './components/Basic5';
import Basic6 from './components/Basic6';
import Basic7 from './components/Basic7';
import Counter from './components/Counter';
import Basic8 from './components/Basic8';
import Basic9 from './components/Basic9';
import Basic10 from './components/Basic10';
import Basic11 from './components/Basic11';
import Basic12 from './components/Basic12';
import Basic13 from './components/Basic13';
import Basic14 from './components/Basic14';
import Basic15 from './components/Basic15';
import Basic16 from './components/Basic16';


const components = [
  Basic1,
  Basic2,
  Basic3,
  Basic4,
  Basic5,
  Basic6,
  Basic7,
  Basic8,
  Basic9,
  Basic10, // 프론트 데이터 패칭 비동기요청 Promise 제어
  Basic11,
  Basic12,
  Basic13,
  Basic14,
  Basic15,
  Basic16,
];

const App: Component = () => {
  console.log('App 실행');

  const [number, setNumber] = createSignal<number>(0);
  
  return (
    <>
      <For each={components}>
        {(_, idx) => (
          <button
            style={{ margin: '0 5px' }}
            onClick={() => setNumber(idx() + 1)}
          >
            Basic{idx() + 1}
          </button>
        )}
      </For>
      
      {number() > 0 && (
        <>
          {(() => {
            const Comp = components[number() - 1];
            switch (number()) {
              case 13:
                return <Comp title="hello" disabled={true} />;
              default:
                return <Comp />;
              }
          })()}

          <hr />
          <button onClick={() => setNumber(0)}>close</button>
        </>
      )}
    </>
  );
};

export default App;
