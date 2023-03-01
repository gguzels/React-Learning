import { useAuth } from "./AuthContext";
 
 export default function AuthOps() {
  
  const {user, setUser} = useAuth();

  
  const login = () => {    
  localStorage.setItem('user', JSON.stringify({name: 'enes', id:1}
))
    setUser({
      name: 'enes',
      id:1
    })
    console.log("İçerdeyim");
}
  const logout = () => {
    localStorage.removeItem('user');
    setUser(false);
    console.log("im out");
  }

   return (
     <div className="p-2 m-1">
      <h4 className="border-bottom border-warning">AuthOps</h4>
      {(user && <button onClick={logout} className="btn btn-warning">Çıkış Yap</button>) || (<button onClick={login} className="btn btn-warning">Giriş Yap</button>) }
      <pre>{user && JSON.stringify(user, null, 2)}</pre>
    </div>
   )
 }
 