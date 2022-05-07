// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
  // <Navbar title='TextUtils' about="About TextUtils"/>
  <>
    <Navbar title='TextUtils' />
    <div className="container my-5">
    <TextForm heading="Enter the Text to analyze"/>
    </div>
  </>
  );
}

export default App;
