import AuthOps from "./AuthOps";
import Switches from "./Switches";

export default function Header(){


  return(
    <header className="p-2">
      <div className="d-flex">
        <AuthOps/>
      </div>
       <h2 className="border-bottom border-primary p-2">Header</h2>
      <Switches/>
    </header>
  )
}