import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing Pages
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

//Importing Components of Layout
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
   return (
      <Router>
         <NavBar />
         <Container customClass="min-height">
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/company" element={<Company />} />
               <Route exact path="/contact" element={<Contact />} />
               <Route exact path="/newproject" element={<NewProject />} />
               <Route exact path="/projects" element={<Projects />} />
            </Routes>
         </Container>
         <Footer />
      </Router>
   );
}

export default App;
