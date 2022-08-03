import Blog from "./pages/blogHome/index";
import "../src/style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetail from "./pages/blogDetail";
import Services from "../src/pages/services/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
