import React, { useState } from 'react';
import { connect } from 'react-redux';

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
  return (
    <div onClick={() => setUser({ name: 'carrey', age: 7.5 })}>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <Child a="1"></Child>
    </div>
  );
}
