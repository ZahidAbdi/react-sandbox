import {useState, useEffect, useRef} from 'react'

// To set a reference to the number of renders 
function UseRefExample2() {
  const [name, setName] = useState()
  const renders = useRef(1) //when you set it to a dom element you can set it as empty or you can pass in a default value and in this case its 1 because when we first load the component its the first render 
  const prevName = useRef()

  useEffect(() => {
    //to set the render to 1 ahead of it: render + 1
    renders.current = renders.current + 1
    prevName.current = name //every time name changes we're gonna store prev state in the "prevName.current"
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" /> 
      {/* this is grabbing the value of whatever is typed and state gets updated with every input by increments by 1 */}
    </div>
  )
}

export default UseRefExample2