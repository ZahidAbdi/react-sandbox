import {useRef} from "react"

function UseRefExample1() {
  // useRef will always give you an object with one property called current and in that current is the DOM element 
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    console.log(inputRef.current.value) // Gets the value of the input 
    inputRef.current.value = 'Hello' // the value of the input gets set to Hello
    inputRef.current.style.backgroundColor = 'red' // Can change the style if you wanted 
    // its important to understand that when you change a reference value it doesn't re-render the component as if you were to set a state value
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
      </form>
    </div>
  )
}

export default UseRefExample1