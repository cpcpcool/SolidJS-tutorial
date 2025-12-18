import { Component, createSignal, ParentComponent, splitProps } from 'solid-js';


const Basic13: Component<{ title?: string; disabled?: boolean }> = (props) => {
  
  // 특정객체만 붙리하여 안전하게 사용, 나머지들의 객체인 rest도 사용가능
  const [local, rest] = splitProps(props, ['title']);
  
  console.log("rest", rest)

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 13. splitProps (props 구조 분해 안전 패턴)</h2>

        <button {...rest}>
          {local.title}
        </button>
      </div>
    </>
  );
};

export default Basic13;