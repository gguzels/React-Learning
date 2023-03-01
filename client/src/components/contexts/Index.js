import Home from "./Home";
import { SiteProvider, AuthProvider } from "./AllProvider";

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