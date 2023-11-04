import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Popup from "./components/Popup";
import { useProductsContext } from "./context/context";

function App() {
  const { popup } = useProductsContext();
  return (
    <div>
      {popup ? <Popup /> : null}
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
