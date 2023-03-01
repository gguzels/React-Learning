import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";

const Context = createContext();

const Provider = ({children}) => {

  const [state, dispatch] = useReducer(Reducer, {
    theme: localStorage.getItem('theme') || 'light',
    lang: 'tr'
  }) //local storage'da varsa önce oraya bakacak 'theme' için


  const data = {...state, dispatch};

  return(
    <Context.Provider value={data} >
      {children}
      </Context.Provider>
  )
}

export const useSite = () => useContext(Context);

export default Provider;

