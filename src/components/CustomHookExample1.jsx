import useFetch from "../hooks/useFetch"

// this is helpful so you dont have to use the use effect inside the component 
function CustomHookExample1() {
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

  if(loading) {
    return <h3>Loading...</h3>
  }
  console.log(error);
  return (
    <div>
      {data.map(post => (
      <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1