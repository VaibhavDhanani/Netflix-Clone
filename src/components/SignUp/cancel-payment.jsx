import React from "react";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
const Cancelpayment = ()=>{


return(
    <div className="cancel" style={{ backgroundColor: "white" }}>

<Alert severity="error">Payment Failed, Try again</Alert>

<img 
  style={{ display: "block", margin: "auto", paddingTop:"20px",marginTop:"40px",width: "550px", height: "350px" }} 
  src="https://miro.medium.com/v2/resize:fit:810/1*OkeqV425CNZUQT2HSkTnJA.png" 
  alt="" 
/>

    <a href="/signup"><Button variant="contained">Try again</Button></a>


</div>

);

}

export default Cancelpayment;