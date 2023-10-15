import "./Apps.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Alert from "./component/Alert";
//import About from "./component/About";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtiles - Dark Mode";
      // setTimeout(() => {
      //   document.title="TextUtiles - is free";

      // }, 3000);
      // setTimeout(() => {
      //   document.title="TextUtiles - Download Now";

      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtiles - Light Mode";
    }
  };
  return (
    <>
      {/* </><Router> */}
        {/* <Navbar title="TextUtilss" aboutText="AboutTextUtils"/> */}
        <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/"> */}
              <Form
                showAlert={showAlert}
                heading="Enter The Text To Analyze"
                mode={mode}
              />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
