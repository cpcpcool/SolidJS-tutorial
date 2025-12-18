import { Component, createSignal, mergeProps, ParentComponent, splitProps } from 'solid-js';


const Basic14:  Component<{ size?: 'sm' | 'md' }> = (props) => {
  
  const merged = mergeProps({ size: 'md' }, props);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 14. mergeProps (기본값 합성)</h2>

        <button>{merged.size}</button>
      </div>
    </>
  );
};

export default Basic14;