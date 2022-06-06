import Footer from "components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Router from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
