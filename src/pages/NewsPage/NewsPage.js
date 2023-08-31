import "./NewsPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NewsContent from "../../components/NewsContent/NewsContent";
function NewsPage() {
    return ( 
        <>
        <NavBar />
        <NewsContent />
        <Footer />
        </>
     );
}

export default NewsPage;