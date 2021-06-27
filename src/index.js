import React from 'react';
import ReactDOM from 'react-dom';
import './mycss.css';

function Hi({name, batch}) {

    return <div><center>
      <h1>Panacloud Blockchain Practical Training</h1>
    <h2>Step 7 - Transfer DAI </h2>
Prepared by <strong>{name}</strong>
<br></br>From batch {batch}

  <label for="ethAddress">Transfer To Address:</label><br>
  <input type="text" id="ethAddress" name="fname"><br>
  <label for="amount">DAI Amount:</label><br>
  <input type="text" id="amount" name="amount">
  <button id='send'> Send </button>

      
      <p className="myStyle"><button>Connect to Metamask</button></p>
    </center></div>;

  }

  ReactDOM.render(<Hi name="Tariq Saeed" batch="Block Chain 34"/>, document.querySelector('#root'));
