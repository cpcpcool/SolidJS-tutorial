import { Component, createSignal, ParentComponent } from 'solid-js';

const ParentBox: ParentComponent = (props) => {
  return <div style={{ border: '1px solid black' }}>{props.children}</div>;
};

const Basic12: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>STEP 12. children (children도 반응형)</h2>

        <ParentBox>
          <button onClick={() => setCount(count() + 1)}>
            count: {count()}
          </button>
        </ParentBox>
      </div>
      
      <hr />
      <ul>
        <li>children도 reactive</li>
        <li>필요 시 props.children() 호출</li>
      </ul>
    </>
  );
};

export default Basic12;