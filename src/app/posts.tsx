import React, { useState } from 'react';

const [count, setCount] = useState(0);
const [name, setName] = useState('Max');
const [items, setItems] = useState([1, 2, 3]);
const [bool, setBool] = useState(true);
const [obj, setObj] = useState({ a: 1, b: 2 });

const url = "https://jsonplaceholder.typicode.com/users";


function Example() {
    // Declare a new state variable, which we'll call "count"
const [data, setData] = useState([])
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}