import { useReducer } from "react";
import ReducerFunc from "./ReducerFunc";

function ReducerApp(){

    const[state, dispatch] = useReducer(ReducerFunc, {
        todos: [],
        todo: ''
    }); //useState ile belirlemek yerine bu yöntemi kullandık.

    const submitHandle = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            value: state.todo //todo
        })
        // setTodos([...todos, todo]);
        // setTodo("");
    }

    const onChange = e => {
        //setTodo(e.target.value)
        dispatch({
            type: 'SET_TODO',
            value: e.target.value
        })
    }

    return(
        <div className="container my-5">
            <h1>Todo App</h1>
            <form onSubmit={submitHandle}>
                <input style={{border:"2px solid blue", padding:4, borderRadius:5}} 
                value={state.todo}
                onChange={ onChange }
                type="text"
                />
                <button disabled={!state.todo} className="btn btn-secondary" type="submit">Ekle</button>
            </form>
            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReducerApp

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