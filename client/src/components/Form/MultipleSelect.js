import { useState } from "react";

function MultipleSelect(){

  const categoryList=[
    {key:1, value:'PHP'},
    {key:2, value:'JavaScript'},
    {key:3, value:'CSS'},
    {key:4, value:'HTML'},
  ]
  const [categories, setCategories]= useState([2,4]);
  const selectedCategories= categories && categoryList.filter(c => categories.includes(c.key))

  return(
        <div className="col-12 selects">
          <button className="btn btn-dark my-4" onClick={() =>setCategories([2,3,4])}>Choose Categories</button>
          <select className="form-select" multiple={true} value={categories} 
            onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
            {categoryList.map(category => (
                <option key={category.key} value={category.key}>{category.value}</option>
              ))}
          </select>
          <pre className="my-2 ps-3">{JSON.stringify(selectedCategories, null, 2)}</pre>
        </div>
  );
}

export default MultipleSelect;