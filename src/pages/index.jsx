import { Container } from "react-bootstrap";
import Sidebar from "../components/menubar/Sidebar";
import Headerbar from "../components/menubar/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="bbts-container">
      <Sidebar />
      <div id="bbts-container">
        <Headerbar />
      </div>
    </div>
  );
}

export default App;
