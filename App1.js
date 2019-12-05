import React, { Component } from 'react';

const App1 = () =>
{

    const [x, setx] = React.useState("");
    const [disp,setDisp]=React.useState([]);
    const handleChange = (e) => {
        setx(e.target.value);
        setDisp(x)
       
    }

    return (
        <div>
            <input type="text" value={x} onChange={handleChange}></input>
        
           
            {
                disp.map((i)=>
                {
                return (<ul><li>{i}</li> </ul>)
                }    )
            }
           
     
        </div>
    )
}
export default App1;