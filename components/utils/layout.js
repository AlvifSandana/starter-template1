import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div id="app">
      <div className="main-wrapper main-wrapper-1">
        <Navbar />
        <Sidebar />
        <div className="main-content">
        </div>
        <Footer />
      </div>
    </div>
  )
}