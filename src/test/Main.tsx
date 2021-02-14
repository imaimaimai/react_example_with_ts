import React, { useEffect, useState } from 'react';

export default function Main() {

  function calcRandNum () {

    return Math.floor(Math.random() * 3);
  }

  const [greeting, setGreeting] = useState("")
  // const [count, setCount] = useState(0);
  const greetings = ['hello', 'hola', 'お前を蝋人形にしてやろうか'];

  useEffect(() => {
    setGreeting(greeting);
  });

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={() => setGreeting(greetings[calcRandNum()]) }>GO!</button>

    </div>
  )

}