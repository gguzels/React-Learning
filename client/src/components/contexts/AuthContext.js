import { createContext, useState, useContext } from "react";

const Context = createContext();

const Provider = ({children}) => {

  const localUser = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : false;
  const [user, setUser] = useState(localUser);

  const data = {user, setUser};

  return(
    <Context.Provider value={data} >
      {children}
      </Context.Provider>
  )
}

export const useAuth = () => useContext(Context);

export default Provider;

