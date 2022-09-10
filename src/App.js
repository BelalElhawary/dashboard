import React, { useState } from 'react'
import { Main } from './pages';
import { CheckToken, LogIn, Token } from './data/DataLoader'
import './App.css';
import './LogIn.css';

const App = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);


  const handleSubmit = e => {
    LogIn(username, password, loadToken)
    setSuccess(true)
  }

  const loadToken = (value) => {
    setSuccess(value);
  }

  if(Token)
    CheckToken(setSuccess);


  return (<>{success ? (<Main />) : (<>
    <div className="login-wrapper">
      <h1>Please LogIn</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label><br></br>
        <input id='rm' type="checkbox" onChange={e => setPassword(e.target.value)} />
        <label htmlFor='rm'>Remember me</label>
        <div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
    <p className='fotter'>Copyright ©2022 BelalElhawary, Eibtek ®</p>
  </>)}</>)
}

export default App