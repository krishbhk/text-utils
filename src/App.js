// import logo from './logo.svg';
// import './App.css';

// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
  <div>
    <Navbar title='TextUtils' />
    <div className="container my-4">
    <TextForm heading="Enter the Text to analyze"/>
    {/* <About /> */}
    </div>
  </div>
  );
}

export default App;
