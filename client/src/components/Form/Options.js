import { useState } from "react";

function Options(){

  const[level, setLevel] = useState('ber');
  const levels = [
    {key:'ber', value:'Başlangıç'},
    {key:'jr', value:'Sr. Developer'},
    {key:'sr', value:'Jr. Developer'},
  ];
  const selectedLevel = levels.find(g => g.key === level);


  return(
        <div className="col-12 my-5 py-4 selects">
          <p className="my-4 ms-3 border-bottom border-info py-1 px-2">{
            JSON.stringify(selectedLevel,null,2)
          }</p>
         {levels.map((lvl, index) => (
          <label key={index} className="mx-3">
            <input type="radio" value={lvl.key} checked={lvl.key === level}
            onChange={e => setLevel(e.target.value)} />
            {lvl.value}
          </label>
         ))}
        </div>
  );
}

export default Options;