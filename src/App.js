import React, { useState } from 'react';

export default function App() {
  let [user, setUser] = useState({ name: 'yq', age: 18 });
  return (
    <div onClick={() => setUser({ name: 'carrey', age: 7.5 })}>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </div>
  );
}
