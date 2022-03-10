// memoization is an optimization technique that speeds up performance by storing or cashing the results of an expensive function call when the same input occur when it has the same arguments
// expensive function call like - a function that takes a lot of resources and takes a while to execute/complete. like searching through thousands of records in a database or you're doing something with video processing.
import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  // const sqrt = getSqrt(number) 
  const sqrt = useMemo(() => getSqrt(number), [number]) // were not changing the value of number so we can memo the value from it. so it still runs the "expensive function" but once i press the re render button it doesn't call it again because its memoized the value from getSqrt because the number input isn't changing 

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }


  return (
    <div>
      <input 
      type="number" 
      value={number} 
      onChange={(e) => setNumber(e.target.value)} 
      className="form-control w-25" 
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button onClick={onClick}  className="btn btn-primary">Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}


//example of an "expensive function"
function getSqrt(n) {
for(let i = 0; i<= 1000; i++) {
  console.log(i);
}

  console.log('Expensive Function Called')
  return Math.sqrt(n)
}

export default UseMemoExample