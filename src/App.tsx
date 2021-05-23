import { FC } from "react";
// import firebase from "firebase";

import "./App.css";
import Get from "firebase/get/index";

const App: FC = () => (
  <div className="App">
    <h3>Get</h3>
    <Get />
    <h3>Put</h3>
  </div>
);

export default App;
