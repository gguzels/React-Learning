import React from "react";
import { Button } from 'react-bootstrap';


function Bootstrap(){
    return(
        <div className="my-5">
            <h3 className="my-2">Bootstrap Komponentleri</h3>
            <Button>Button</Button>
            <Button variant="success ms-4">Button</Button>
        </div>
    )
}

export default Bootstrap;