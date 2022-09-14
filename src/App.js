import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";



export default function App() {
  return (
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  );
}
