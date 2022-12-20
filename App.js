
//import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import {
  Switch,
Route} from "react-router-dom";
 
function App() 
{
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }
  const toggleMode = (cls)=>{ 
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enables","sucees");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enables","sucees");
      //document.title='React - Light Mode';

    }
  }
  return (
    <>
    
     <Navbar title="React" mode= {mode} toggleMode={toggleMode} />
     <Alert alert={alert}/> 
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
          <About mode= {mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode= {mode}/>
          </Route>
      </Switch> 
     </div>
    </> 
  );
}

export default App;
