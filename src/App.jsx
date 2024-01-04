import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import SingleBlog from "./pages/SingleBlog";
import NotFound from "./pages/NotFound";
import OpdrachtenPage from "./pages/OpdrachtenPage";
import ReferentiesPage from "./pages/ReferentiesPage";
import Dienstverlening from "./pages/Dienstverlening";
import OverMij from "./pages/OverMij";
import BlogAdmin from "./pages/BlogAdmin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-mij" element={<OverMij />} />
        <Route path="/dienstverlening" element={<Dienstverlening />} />
        <Route path="/opdrachten" element={<OpdrachtenPage />} />
        <Route path="/referenties" element={<ReferentiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogadmin" element={<BlogAdmin />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
