import React from 'react';
import ReactDOM from 'react-dom';
import './mycss.css';

function Hi({name, batch}) {

    return <div><center>
      <h1>Panacloud Blockchain Practical Training</h1>
    <h2>Step 7 - Transfer DAI </h2>
Prepared by <strong>{name}</strong>
//<br></br>From batch {batch}
      <ol>
        <li>Changed the Hello world</li>
        <li>Made my name bold (see above) </li>
        <li>Added more html tag e.g heading</li>
        <li>Added the ordered list</li>
        <li>Expression solving as well, ten plus five = {10+5}</li>
      </ol> 
      
      <p className="myStyle"> This is styled text using css </p>
    </center></div>;

  }

  ReactDOM.render(<Hi name="Tariq Saeed" batch="Block Chain 34"/>, document.querySelector('#root'));
