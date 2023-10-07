import './App.css'
import {useState} from "react";
import Counter from "./components/Counter/Counter.jsx";
import Avto from "./components/Avto/Avto.jsx";
import Connect from "./components/Connect/Connect.jsx";
import Colors from "./components/Colors/Colors.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";



function App() {
  const [page,setPage] = useState('Counter');


  const changePage = ()=>{
    switch(page) {
      case "Counter":
        return <Counter/>;
      case "Avto":
        return <Avto/>;
      case 'Connect':
        return <Connect/>
      case "Tasks":
        return <Tasks />
      case "Colors":
        return <Colors/>
    }
  }
  return (
    <div className='App'>
      <div className="App-buttons">
      <h1>Home work(useReducer, useLayoutEffect)</h1>
        <button onClick={()=>setPage('Counter')}>Counter</button>
        <button onClick={()=>setPage('Avto')}>Avto</button>
        <button onClick={()=>setPage("Connect")}>Connect</button>
        <button onClick={()=>setPage("Tasks")}>Tasks</button>
        <button onClick={()=>setPage("Colors")}>Colors</button>
      </div>
      <div className="page-content">{changePage()}</div>
    </div>
  )
}

export default App;
