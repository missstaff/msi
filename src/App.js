import About from "./Components/About";
import Form from "./Components/Form/Form";
import Footer from "./Components/Layout/Footer";
import Navigation from "./Components/Layout/Navigation";


function App() {
  return (
      <div style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}>
       <Navigation />
        <About />
        <Form />
       <Footer />
     </div>
  );
};

export default App;
