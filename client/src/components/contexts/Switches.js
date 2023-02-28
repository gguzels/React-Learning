import {useSite} from "./SiteContext";

export default function Switches() {

  const {setLang, setTheme, lang, theme} = useSite();
  console.log(lang, theme);

  return (
    <div className="p-2">
      <div className="row">
        <div className="col-lg-6">
          <h3>Renk Değiştir</h3>
          <button className="btn btn-secondary" onClick={()=> setTheme(theme==='light'?'dark':'light')}>Bas Renk Değişsin</button>
        </div>
        <div className="col-lg-6">
          <h3>Dil Değiştir</h3>
          <button className="btn btn-secondary" onClick={()=> setLang(lang==='tr'?'en':'tr')}>Bas Dil Değişsin</button>
        </div>
      </div>
    </div>
  )
}
