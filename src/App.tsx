import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sections from "./components/Sections";
import AOS from "aos";
import "aos/dist/aos.css";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Sections />
      </div>
      <Footer />
    </>
  );
}

export default App;
