import Tab from "./Tab";
import { useState } from "react";
export default function TabApp() {

    const[activeTab, setActiveTab]= useState(1);
  
    return (  
              <div style={{padding:20}}> 
                <button onClick={() => setActiveTab(2)} className='btn btn-secondary'>Aktif Tabı Değiştir</button>
                <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
                  <Tab.Panel title="Profil">1.Tab</Tab.Panel>
                  <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
                  <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
                </Tab>
              </div>
    );
  }