
import React, {useState} from 'react';
import './Lights.css'
function Lights() {
let [isOn,setOn] = useState(false);
let [temp,settemp]= useState(22)
return(
<div>
    <div className= {`Lights ${isOn? "On":"Off"}`}>
The light is {isOn? "Light is On": "Light is Off"}
<br/><br/>
<button onClick= {() => setOn(!isOn)}> Change state of light</button><br/><br/><br/>
<button onClick = {() =>{ console.log ("Increase temp by Button");
settemp(++temp);}}> Increase Temperature </button>
<br/><br/>
<br/>

<button onClick = {({url}) => {console.log("Decrease Temp by Button");
settemp(--temp);}}>Decrease Temperature</button>
<br/><br/>
Temperature = {temp} C


</div>
</div>
);
}
export default Lights;
