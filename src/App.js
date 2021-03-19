/*
filename: App.js 
*/
// TO DO remettre l'import useState
import React, { useCallback } from "react";
// import simple library to generate unique IDs
//import cuid from "cuid";
// Import the dropzone component
import Dropzone from "./Dropzone";
// Import assets
import wheel from "./Asset 4.svg";
import schem from "./pow2neo.png";
// Import pdf-lib
//import { PDFDocument} from "pdf-lib";
// Import styles
import "./App.css";

function App() {
  // Create a state called files using useState hooks and pass the initial value as empty array
  //const [files, setFiles] = useState([]);
  // onDrop function  
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);
    // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook

  function sayHello() {
    alert('Fonction en cours de développement.\n Réessayez plus tard.\n Désolé !');
  }

  return (
    <main className="App">
      <header className="App-header">
        <img src={wheel} className="App-logo" alt="logo" />
        <h1 className="text-center">FUSIONNER 2 PDF</h1>
        <img src={schem}className="schem" alt="schem"/>
        <p className="text-center">Utile pour notifier plusieurs décomptes de charges en même temps !</p>
        <Dropzone onDrop={onDrop} accept={"application/pdf, text/plain"} />
        <button className='button' onClick={sayHello}>Cliquer sans crainte !</button>
      </header>
    </main>
  );
}

export default App;
