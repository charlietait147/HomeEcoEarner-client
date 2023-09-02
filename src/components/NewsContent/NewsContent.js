import "./NewsContent.scss"
import axios from "axios";
import { useEffect, useState } from "react";

function NewsContent() {
    const [newsArticleList, setNewsArticleList] = useState([]);

    const getNewsArticles = async () => {
        try{
            const response = await axios(`${process.env.REACT_APP_API_URL}/news`);
            const fetchNewsArticles = response.data
            console.log(fetchNewsArticles);
        } catch (error) {
            console.log("Unable to retrieve users" + error);
        }
    }
    useEffect(() => {
        getNewsArticles();
    }, [])
    return (
        <section className="news-content">
            <div className="news-content__banner">
                <span className="news-content__header">NEWS</span>
            </div>
            <div className="news-content__wrapper">
                <div className="news-content__news-article-container">
                    <p className="news-content__search-title">FILTER/SEARCH:</p>
                    <div className="news-content__search-container">
                        <input type="text" className="news-content__filter-search" />
                        <button className="news-content__filter-button">FILTER NOW</button>
                    </div>
                    <div className="news-content__news-container">
                        <p className="news-content__results"> 6 Results </p>
                        <div className="news-content__card-container">
                            <article className="news-content__card">
                                <img src="" alt="" className="news-content__image" />
                                <p className="news-content__article-release-date">
                                    SEPTEMBER 1, 2023
                                </p>
                                <h3 className="news-content__article-title">
                                    Why Solar Panels are becoming more important than ever
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default NewsContent;