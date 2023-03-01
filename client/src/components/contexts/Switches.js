import {useSite} from "./SiteContext";

export default function Switches() {

  const {theme, lang, dispatch} = useSite();
  console.log(theme, lang);
  return (
    <div className="p-2">
      <div className="row">
        <div className="col-lg-6">
          <h3>Renk Değiştir</h3>
          <button className="btn btn-secondary" onClick={()=>dispatch({  type: 'toggle_theme'})}>Bas Renk Değişsin</button>
        </div>
        <div className="col-lg-6">
          <h3>Dil Değiştir</h3>
          <button className="btn btn-secondary" onClick={()=>dispatch({  type: 'toggle_lang'})}>Bas Dil Değişsin</button>
        </div>
      </div>
    </div>
  )
}
