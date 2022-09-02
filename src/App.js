import React from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState({
    comment: '',
  });
  const inp = React.useRef();
  const formRef = React.useRef();
  console.log(inp);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        setValue({ ...value, comment: inp.current.value });
        inp.current.value = '';
        e.preventDefault();
      }}
    >
      <h1>Hello StackBlitz!</h1>
      <input text="text" ref={inp} />
      {value.comment}
      <button
      // onClick={() => {
      //   onClickHandler();
      // }}
      >
        추가
      </button>
      <p>Start editing to see some magic happen :)</p>
    </form>
  );
}
