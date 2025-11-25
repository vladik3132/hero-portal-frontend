import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

// Ваші сторінки
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import HeroPage from "./pages/HeroPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />

        {/* Перегляд одного героя */}
        <Route path="/hero/:id" element={<HeroPage />} />

        {/* Адмін */}
     <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  }
/>
 </Routes>
 <Footer />

    </>
  );
}

