import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const App = () => {
  return (
    // Fragment is a ghost element that won't show up in DOM
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
