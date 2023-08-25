import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Landingpage />}/>
    <Route path = "qualify" element = {<QualifyFormpage />}/>
    <Route path = "admin" element = {<Adminpage />}/>
    <Route path = "contact-us" element = {<Contactpage />}/>
    <Route path = "news" element = {<Newspage />} />
    <Route path = "*" element = {<PageNotFound />} /> 
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
