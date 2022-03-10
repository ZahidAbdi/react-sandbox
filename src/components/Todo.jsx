import {useState, useEffect, useRef} from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState()

  const isMounted = useRef(true)

  useEffect(() => {
    // If you want something to happen when a component is unmounted you return it from the useEffect (to fix the error of an unmounted component that indicates a memory leak)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        if(isMounted.current) {
          setTodo(data)
          setLoading(false) 
        }
      }, 3000)
    })

    //this runs runs when the component is unmounted 
    return () => {
      isMounted.current = false 
    }
  }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo