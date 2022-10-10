import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import { connect } from 'react-redux';
import './style.css';
const MyChild = (props, ref) => {
  useImperativeHandle(ref, () => ({
    myHandler,
  }));
  const myHandler = () => {
    console.log('myhandler');
  };

  return (
    <div onClick={props.changeName}>
      <p>child--{props.sName}</p>
      <button onClick={myHandler}>xxx</button>
    </div>
  );
};

const Forward = forwardRef(MyChild);

const Child = connect(
  (state) => {
    return {
      sName: state.name,
    };
  },
  (dispatch) => ({
    changeName(e) {
      e.stopPropagation();
      dispatch({ type: 'CHANGE_NAME', name: 'change_store_all' });
    },
  }),
  null,
  { forwardRef: true }
)(Forward);

export default function App() {
  let [user, setUser] = useState({ name: 'yq', age: 18 });

  const handler = (e) => {
    e.stopPropagation();
    console.log(123, ref);
    ref.current.myHandler();
  };

  let ref = useRef(null);

  return (
    <div onClick={() => setUser({ name: 'carrey', age: 7.5 })}>
      <h1>{user.name}</h1>
      <p className="box" onClick={handler}>
        {user.age}
      </p>
      <Child a="1" ref={ref}></Child>
    </div>
  );
}
