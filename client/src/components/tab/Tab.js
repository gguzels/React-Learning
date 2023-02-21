function Tab({children, activeTab, setActiveTab}){
    
    return(
        <div>
            <nav className="text-3xl font-bold underline mt-3">
                {children.map( (tab, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveTab(index)} 
                        className={ activeTab=== index ? 'btn btn-info mx-1 mb-3' : 'btn btn-warning mx-1 mb-3'}
                        >
                        {tab.props.title}
                    </button> ))  }          
            </nav>
            {children[activeTab]}
        </div>
    )
}

Tab.Panel = function({children}){
    return(
        <div>{children}</div>
    )
}

export default Tab