import { FC } from "react";
// import firebase from "firebase";

import "./App.css";
import Get from "firebase/get/index";
import Put from "firebase/put/index";
import Update from "firebase/update/index";
import Delete from "firebase/delete/index";
import RealTime from "firebase/realtime";

const App: FC = () => (
  <div className="App">
    <h3>Get</h3>
    <Get />
    <h3>Put</h3>
    <Put />
    <h3>Update</h3>
    <Update />
    <h3>Delete</h3>
    <Delete />
    <h3>Realtime</h3>
    <RealTime />
  </div>
);

export default App;
