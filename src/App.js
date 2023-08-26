import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<LandingPage />}/>
    <Route path = "qualify" element = {<QualifyFormPage />}/>
    <Route path = "admin/login" element = {<AdminLoginPage />}/>
    <Route path = "admin/database" element = {<AdminDatabase />}/>
    <Route path = "contact-us" element = {<ContactPage />}/>
    <Route path = "news" element = {<NewsPage />} />
    <Route path = "*" element = {<NotFound />} /> 
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
