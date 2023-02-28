import { useState } from "react";
import File from "./File";

function FormElements(){
  
  const [name, setName] = useState('enes');
  const [description, setDescription] = useState('');
  

  return(
    <div className="container my-5">
      <div className="row">
        <div className="col-12 input border-bottom border-secondary">
        <button className="btn btn-info my-4" onClick={() => setName('Ahmet')}>Change the Name</button>
          <p className="my-3">Eğer input'ta value yerine defaultValue kullanırsak sürekli takip edemiyor. Sıkıntı</p>
          <input className="form-control" value={name} type="text" onChange={e => setName(e.target.value)}/><br/>
          <p>{name}</p>
        </div>
        <div className="col-12 text my-4 py-3 border-bottom border-success">
          <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)}></textarea>
          <p className="my-2">{description}</p>        
        </div>
        <File/>
      </div>
    </div>
  );
}

export default FormElements;