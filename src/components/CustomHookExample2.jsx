import useLocalStorage from "../hooks/useLocalStorage"


// This custom hook is going to be used to set local storage instead of setting it just to the state

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])


  const onSubmit = e => {
    e.preventDefault()

    // when i submit it i want to take the task thats in there and set it to an array and put it into local storage
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }

    setTasks([...tasks, taskObj])

  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input 
          className='form-control'
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          /*Every time the on change runs when you type in it it sets the task state*/
          />
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  )
}

export default CustomHookExample2