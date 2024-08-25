import "./App.css";
import useFeatch from "./hook/useFeatch"

export default function App() {
  const {data, loading, error} = useFeatch("https://jsonplaceholder.typicode.com/todos/")
  if(loading) {
   return <h2>Loading...</h2>
  }

  if(error) {
    return <h2> {error}</h2>
  }
  
  return <main>
    
    {data && data.map((todo) =>  <p key={todo.id}> {todo.title}</p>)}
  </main>;
}
