import React,{useState, useCallback} from 'react'

// useCallback is similar to useMemo, it returns a memoization callBack Function
// so their used in the same way. they both expect a function and a array of dependencies. UseMemo calls the function and return the result when the dependencies change. useCallback returns the function when the dependencies change 

// React.memo which is a HOC (high order component) that takes a component as a prob and prevents the re-rendering if the props or the value within it hasn't changed. it Memoized an entire React component

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])


  
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}


// Using React.memo here 
// with each click some task gets rendered but since its been memoized the 'Button Rendered" isnt being rendered to the console more than the one time. it saves time. this is very simple but it shows how it works
const Button = React.memo(({ addTask }) => {
  console.log("Button Rendered");
  return (
    <div>
    {/* once the button is clicked addTask gets called and passed in as a prop */}
      <button className='btn btn-primary' onClick={addTask}>Add Task</button>
    </div>
  )
})
export default UseCallbackExample