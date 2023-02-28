import { memo } from "react"

function ReducerTodos({todos}) {
  console.log("Todos List Rendered")
  
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(ReducerTodos)