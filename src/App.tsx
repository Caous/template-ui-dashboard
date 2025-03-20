import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
