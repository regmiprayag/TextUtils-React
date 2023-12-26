// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import NabBar from './components/NabBar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [mode,setMode] = useState('light')

  const [alert,setAlert]=useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const changeColor = (cls)=>{
    console.log(cls)
    if(cls==='primary'){
      document.body.style.background = "blue"
    }
    else if(cls==="success"){
      document.body.style.background = "green"
    }
    else if(cls==="danger"){
      document.body.style.background = "red"
    }
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background = "gray"
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode("light");
      document.body.style.background = "white"
      showAlert("Light Mode has been enabled","danger")
    }
  }

  return (
    <>
      <NabBar title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alerts alert={alert}/>
      <div className="container my-4">
        <TextForm showAlert={showAlert} heading="Enter the text to analylize below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
