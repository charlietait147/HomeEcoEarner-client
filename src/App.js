import './App.scss';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminLoginPage from "./pages/AdminLoginPage/AdminLoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NotFound from "./pages/NotFound/NotFound";
import QualifyForm from './pages/QualifyForm/QualifyForm';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<LandingPage />}/>
    <Route path = "qualify" element = {<QualifyForm />}/>
    <Route path = "admin/login" element = {<AdminLoginPage />}/>
    <Route path = "admin/dashboard" element = {<AdminDashboardPage />}/>
    <Route path = "contact-us" element = {<ContactPage />}/>
    <Route path = "news" element = {<NewsPage />} />
    <Route path = "*" element = {<NotFound />} /> 
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;

// element =  {<SuccessResponse isFormSubmitted={true} />} />
