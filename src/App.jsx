
import './App.css'
import Counter from './assets/Counter';
import Team from './assets/Team';
import Friends from './Friends';
import User from './User';
import Friend from './Friend';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
    <Friends></Friends>
    <User></User>
    <Team></Team>
    <Counter></Counter>
    
      <h3>React Core Concepts</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('third clicked')}>Third click</button>
      <button onClick={() => addToFive(5)}>Click</button>
    </>
  )
}

export default App
