import { Fragment, useState } from "react";

function Checkbox(){

  const[rule, setRule] = useState(true);
  const[rules, setRules] = useState([
    {key:1, value:'1. kuralı kabul ediyorum', checked: false},
    {key:2, value:'2. kuralı kabul ediyorum', checked: false},
    {key:3, value:'3. kuralı kabul ediyorum', checked: true},
  ]);

  const checkRule = (key, ifChecked) => {
    setRules(rules => rules.map(rule => {
      if(key===rule.key){
        rule.checked = ifChecked
      }
      return rule;
    }))}

  const enabled = rules.every(rule => rule.checked);


  return(
        <div className="col-12 my-5 py-4 selects">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input mx-2" checked={rule}
            onChange={e => setRule(e.target.checked)} />
            kabul falan edilmiş mi?
          </label><br/>
          
          <br/>
          <div className="my-4 mx-5">
            {rules.map(rule => (<Fragment key={rule.key}>
              <label  className="form-check-label">
              <input type="checkbox" className="form-check-input mx-2" checked={rule.checked}
                onChange={e => checkRule(rule.key, e.target.checked)}
              />
              {rule.value}
            </label><br/>
            </Fragment>
            ))}
          </div>
          <button className="btn btn-dark my-4 mx-5" disabled={!enabled} >Choose Categories</button>
          <pre className="my-4 mx-4">
              {JSON.stringify(rules, null, 2)}
          </pre>
        </div>
  );
}

export default Checkbox;