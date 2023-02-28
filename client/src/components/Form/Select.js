import { useState } from "react";

function Select(){

  // const genders = ['Erkek', 'Kadın'];
  const genders=[
    {key:'1', value:'Erkek'},
    {key:'2', value:'Kadın'},
  ]

  const [gender, setGender] = useState('');
  const selectedGenders = genders.find(g => g.key === gender); // genders?.[gender]

  return(
        <div className="col-12 selects">
          <select className="form-select" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Seçin</option>
            {genders.map(genderr => (
                <option key={genderr.key} value={genderr.key}>{genderr.value}</option>
              ))}
          </select>
          <pre className="my-2 ps-3">{JSON.stringify(selectedGenders, null, 2)}</pre>
        </div>
  );
}

export default Select;