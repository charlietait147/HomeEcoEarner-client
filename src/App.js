import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFound from "./pages/NotFound/NotFound";
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import FAQPage from './pages/FAQPage/FAQPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

