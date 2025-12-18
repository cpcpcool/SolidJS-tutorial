import { Component, createSignal, mergeProps, ParentComponent, splitProps } from 'solid-js';


const Basic15: Component = () => {
  
  const [active, setActive] = createSignal(false);

  return (
    <>
    <style>
      {`
        .active { color: green; font-weight: bold; }
        .disabled { color: gray; text-decoration: line-through; }
      `}
    </style>
      <div style={{ padding: '20px' }}>
        <h2>STEP 15. classList (조건부 클래스)</h2>
        <div
          classList={{
            active: active(),
            disabled: !active(),
          }}
          onClick={() => setActive(!active())}
        >
          toggle
        </div>
      </div>
    </>
  );
};

export default Basic15;