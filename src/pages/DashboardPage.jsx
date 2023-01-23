import { Container } from "react-bootstrap";
import Sidebar from "../components/menubar/Sidebar";
import Headerbar from "../components/menubar/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import TopContent from "../components/content/TopContent";
import Tables from "../components/content/Tables";
import Footer from "../components/Footer";

function DashboardPage() {
  return (
    <div id="bbts-container">
      <Sidebar />
      <div id="bbts-main-container">
        <Headerbar />
        <div className="main-container">
          <TopContent />
          <Tables />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
