import { Component, createSignal, mergeProps, onMount, ParentComponent, splitProps } from 'solid-js';


const Basic16: Component = () => {
  
  let el!: HTMLDivElement;

  onMount(() => {
    el.focus();
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 16. ref (DOM 직접 접근)</h2>
      
        <div ref={el} tabIndex={0}>focus me</div>
      </div>
    </>
  );
};

export default Basic16;