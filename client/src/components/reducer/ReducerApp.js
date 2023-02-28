import { memo, useMemo, useReducer } from "react";
import ReducerForm from "./ReducerForm";
import ReducerTodos from "./ReducerTodos";
import ReducerFunc from "./ReducerFunc";
import { useCallback } from "react";
import { RCounter } from "./ReducerCounter";
import ReducerSearch from "./ReducerSearch";

function ReducerApp(){
    console.log("App Rendered")

    const[state, dispatch] = useReducer(ReducerFunc, {
        todos: [],
        todo: '',
        search:''
    }); //useState ile belirlemek yerine bu yöntemi kullandık.

    const submitHandle = useCallback(e => {
            e.preventDefault();
            dispatch({
                type: 'ADD_TODO',
                value: state.todo //todo
            })
        }, [state.todo])
        

    const onChange = useCallback(e => {
            dispatch({
                type: 'SET_TODO',
                value: e.target.value
            })
        },[])

    const searchHandle = e => {
            dispatch({
              type: 'SET_SEARCH',
              value: e.target.value
            })
          }

    const filteredTodos = useMemo(() => {
        return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')));
    }, [state.todos, state.search])


    return(
        <div className="container my-5 mx-5">
            <RCounter/>
            <hr/>
            <ReducerSearch searchHandle={searchHandle} search={state.search} todos={state.todos} />
            <hr/>
            <ReducerForm submitHandle={submitHandle} onChange={onChange} todo={state.todo} />
            <ReducerTodos todos={filteredTodos} />
        </div>
    )
}

export default memo(ReducerApp)

// USEREDUCER KULLANMADAN ALTTAKİ ŞEKİLDE OLUŞTURUYORDUK ---->

// function ReducerApp(){


//     const [todos, setTodos] = useState([]);
//     const [todo, setTodo] = useState();

//     const submitHandle = e => {
//         e.preventDefault();
//         setTodos([...todos, todo]);
//         setTodo("");
//     }
//     return(
//         <div className="container my-5">
//             <h1>Todo App</h1>
//             <form onSubmit={submitHandle}>
//                 <input style={{border:"2px solid blue", padding:4, borderRadius:5}} 
//                 value={todo}
//                 onChange={ e => setTodo(e.target.value) }
//                 type="text"
//                 />
//                 <button disabled={!todo} className="btn btn-secondary" type="submit">Ekle</button>
//             </form>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         {todo}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }