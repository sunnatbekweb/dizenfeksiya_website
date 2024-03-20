import Footer from "./components/Footer";
import Header from "./components/Header";
import Sections from "./components/Sections";

function App() {
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
