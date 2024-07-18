
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

import { useState } from "react";
function App() {
  const [Inputval, setInputval] = useState("");



  const handleInputChange =(event)=>{
 setInputval(event.target.value);
};
    return (
    <div className="App">
     <input type =""text onChange={handleInputChange}/>
     {Inputval}
    </div>
  );

import { useState } from "react";
function App() {
const [showText,SetShowText] =useState(false);

  return (
  
    <div className="App">
        <button
         onClick={ ()=>{
          alert("hey");
          SetShowText(!showText);
        }}
        >
      Show/Hide
      </button>
{ showText  &&<h1>my name is  laj</h1>}
</div>
      );
}


import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;}
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
*/