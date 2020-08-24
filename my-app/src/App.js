import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Modal} from 'react-bootstrap'



function App() {

  
  return (
    
    <div className="App1">
      <header className="App-header">
        <h2> KATE Farms</h2>
        {/* <button type="submit" class="Website-login-button">Login</button> */}
        <Button>Login</Button>
      </header>

      <body className = "App-Body">
        
        {/* <div className = "parent-container-1">
          <h1> Since 1993 </h1>
        </div> */}

        <div className= "parent-container-2">
          <div className= "child-container">
             <div className = "child-container-1">
                <button type="button" class= "child-container-buttons">About Us</button>
             </div>
          </div>

          <div className= "child-container">
            <div className = "child-container-2">
            {/* <button type="button" class= "child-container-buttons"> Book a Visit </button> */}
            <Button>Book a Visit</Button>
            <Modal>
              <Modal.header>
                Hello Brother
              </Modal.header>
            </Modal>
            {/* <Modal show={false}>
              <Modal.header>
                Book Your Visit
              </Modal.header>

              <Modal.body>
                Login Information
              </Modal.body>
              
              <Modal.footer>
                <Button>Close</Button>
              </Modal.footer>
            </Modal> */}
             </div>
          </div>

          <div className= "child-container">
            <div className = "child-container-3">
              <button type="button" class= "child-container-buttons"> Buy Products </button>
            </div>
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;