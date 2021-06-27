import React from 'react';
import ReactDOM from 'react-dom';
import './mycss.css';

function Hi({name, batch}) {

    return <div> <center>
        <h1>Panacloud Blockchain Practical Training</h1>
      <h2>Step 7 - Transfer DAI </h2>
  Prepared by <strong>{name}</strong>
   <br>From batch {batch}
  <br>
  <p className="myStyle"><button>Connect to Metamask</button></p>
  <table> 
  <tr align="left">
    <td>
        Tranfer To Address
    </td>
    <td>
        <input type="text" id="ethAddress" name="fname"></input>
    </td>
</tr> 
<tr align="left"> 
    <td>
        DAI Amount
    </td>
    <td align="left">    
        <input type="text" id="amount" name="amount"></input>
    </td>
 </tr> 
 <tr> 
     <td></td>
     <td align="right">  <button id='send'> Send </button> </td>
</tr>
   </table>     
        
 };

  ReactDOM.render(<Hi name="Tariq Saeed" batch="Block Chain 34"/>, document.querySelector('#root'));
