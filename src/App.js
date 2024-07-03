
import './App.css';

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
</div>

)

}
export default App;
