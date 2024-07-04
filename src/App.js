import "./App.css";
/*
function App() {
 const name = <h1>Pedro</h1>
 const age = <h2>23</h2>
 const email = <h3>Pedro@gmail.com</h3>
 const user =(
  <div>
  {name} 
  {age} 
  {email}
  <User name="laj" age={23} />
  
 
<Job salary={12345} position="CEO" company="google" />

<Job salary={1245} position="junior" company="netflix" />
  
  </div>

 );
 return <div className="App">
    {user}
  
    </div>
 
}

const User = (props) =>{
return (
<div>
<h1>lajwanti </h1>
<h2>   lajwanti@gmail.com</h2>
<h1>{props.name}</h1>
<h1>{props.age}</h1>
</div>

);}
const Job =(props) =>{
    return (
        <div>
    <h1>{props.salary} </h1>
    <h1>{props.postion} </h1>
    <h2>{props.company}</h2>
    </div>
    
    );}
export default App;
function App() {
  const names = ["laj", "urooj", "muqu"];

  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );

function App() {
    const planets = [
      { name: "Mars", isGasPlanet: false },
      { name: "Earth", isGasPlanet: false },
      { name: "Jupiter", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
    ];
    return (
        <div className="App">
          {planets.map(
            (planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>
          )}
        </div>
      );
    }}

import { useState } from "react";
function App() {
  const [age, setAge] = useState(0);
  const IncAge = () => {
setAge(age + 1);


  };
  return (
    <div className="App">
      {age}
      <button onClick={IncAge}>InCRAESE age </button>
    </div>
  );
}

export default App;
*/
import { useState } from "react";
function App() {
  const [Inputval, setInputval] = useState("");



  const handleInputChange =(event)=>{
  console.log(event.target.value);
};
    return (
    <div className="App">
     <input type =""text onChange={handleInputChange}/>
     {Inputval}
    </div>
  );
}
export default App;