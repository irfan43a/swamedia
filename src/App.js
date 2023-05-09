import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import {gapi} from "gapi-script"
import { useEffect } from 'react';

const clientId ="980721891546-i3lndig49n8nf5mugbq51e2ltiv16h2v.apps.googleusercontent.com";


function App() {

 useEffect(()=>{
  function start() {
    gapi.client.init({
      clientId:clientId,
      scope:""
    })
  }
  gapi.load("client:auth2",start);
 })
//  var accessToken = gapi.auth.getToken().access_Token;

 return(
  <div className='App'>
    <Login/>
    <Logout/>
  </div>
 )
}

export default App;
