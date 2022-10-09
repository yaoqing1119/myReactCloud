import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css'
const MyChild = (props) => {
  return <div>child--{props.sName}</div>;
};

const Child = connect((state) => {
  return {
    sName: state.name,
  };
})(MyChild);

export default function App() {
  let [user, setUser] = useState({ name: 'yq', age: 18 });

  const handler = (e) => {
    e.stopPropagation();
    console.log(123);
  }

  return (
    <div onClick={() => setUser({ name: 'carrey', age: 7.5 })}>
      <h1>{user.name}</h1>
      <p className='box' onClick={handler}>{user.age}</p>
      <Child a="1"></Child>
    </div>
  );
}
