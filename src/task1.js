import React from 'react';

function task1() {
  const age = 19;
  const isGreen = false;
  return (
    <div className="App">
      {age >= 18 ? <h1>over age</h1> : <h2>under age</h2>}
<h1 style={{color:isGreen ? "green":"red"}}>this is color </h1>

      {isGreen &&<button>this is button </button>}
    </div>

  );
}

export default task1;
