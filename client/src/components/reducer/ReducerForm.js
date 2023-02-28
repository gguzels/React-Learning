import { memo } from "react"

function ReducerForm({submitHandle, onChange, todo}){
  console.log("Form Rendered")
  return(
    <>
  <h1>Todo App</h1>
  <form onSubmit={submitHandle}>
    <input style={{ border: "2px solid blue", padding: 4, borderRadius: 5 }}
      value={todo}
      onChange={onChange}
      type="text"
    />
    <button disabled={!todo} className="btn btn-secondary" type="submit">Ekle</button>
  </form>
</>
  )
}

export default memo(ReducerForm)