import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <>
      <div className="page">
        <Header />
        <Sidebar />
        <Dashboard />
        <Footer /> 
      </div>
    </>
  );
}

export default App;
