import Home from "./Home";
import SiteProvider from "./SiteContext";
import AuthProvider from "./AuthContext";

export default function ContextIndex(){

  return(
    <div className="container my-5 p-2">
      <SiteProvider>
        <AuthProvider>
          <Home/>
        </AuthProvider>
      </SiteProvider>
    </div>
  )
}