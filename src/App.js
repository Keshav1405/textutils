import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" About="About Us" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />
        {/* <Routes> */}
          {/* <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />} /> */}
          {/* <Route exact path='/about' element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;