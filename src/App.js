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
import ContactPage from "./pages/ContactPage/ContactPage";
import FAQPage from './pages/FAQPage/FAQPage';
import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import BatteryStorage from './pages/BatteryStorage/BatteryStorage';
import Inverter from './pages/Inverter/Inverter';
import SolarPanels from './pages/SolarPanels/SolarPanels';
import BlogPage from './pages/BlogPage/BlogPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/unleash-the-power-of-your-home-turn-sunshine-into-cash-with-solar-and-battery-systems" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/battery-energy-storage-system" element={ <BatteryStorage/>} />
          <Route path="products/HF-H-series-inverter" element={ <Inverter />} />
          <Route path="products/SR-182-solar-panels" element={ <SolarPanels />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

