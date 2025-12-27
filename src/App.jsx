import { useEffect, useLayoutEffect, useState } from 'react'
import ChipsInput from './Component/NamasteDev/Easy/ChipsInput/ChipsInput';
import LeapYear from './Component/NamasteDev/Easy/LeapYear/LeapYear';
import Todo from './Component/Todo/Todo';
import AutoSave from './Component/NamasteDev/Easy/AutoSave/AutoSave';
import FilterRecipe from './Component/NamasteDev/Easy/FilterRecipe/FilterRecipe';
import ProgressBar from './Component/NamasteDev/Easy/ProgressBar/ProgressBar';
import './index.css'

function App() {
  const [count, setCount] = useState(1)
  const [value, setValue] = useState('Bhava')
  const [text, setText] = useState('vaibhav')

  // useEffect(() => {
  //   setCount(count + 1);
  // }, []);
  // useEffect(() => setValue("Hi"), []);
  // console.log("1");
  // useEffect(() => console.log("2"));
  // console.log("3");
  // useEffect(() => {
  //   for (let i = 0; i < 3; i++) setCount(n => n + 1);
  // }, []);
  // useEffect(() => setText(text + "!"));




  return (
    <>
      {/* <h2>{state.x}</h2> */}
      {/* <div>{text}</div> */}
      {/* <Traffic/> */}
      {/* <LeapYear /> */}
      {/* <Todo/> */}
      {/* <FilterRecipe /> */}
      <ProgressBar/>
    </>
  )
}

export default App
