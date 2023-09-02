import "./NewsContent.scss"
import axios from "axios";
import { useEffect, useState } from "react";

function NewsContent() {
    const [newsArticleList, setNewsArticleList] = useState([]);

    const getNewsArticles = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_API_URL}/news`);
            const fetchNewsArticles = response.data
            setNewsArticleList(fetchNewsArticles)
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
                        <input type="text" className="news-content__filter-search" id="search" />
                        <button className="news-content__filter-button">FILTER NOW</button>
                    </div>
                    <div className="news-content__news-container" >
                        <p className="news-content__results"> 6 Results </p>
                        <div className="news-content__cards-container">
                            {newsArticleList.map((newsArticle) => {
                                return (
                                    <div className="news-content__card-container" key={newsArticle.id}>
                                        <article className="news-content__card">
                                            <img src={newsArticle.image} alt="" className="news-content__article-image" />
                                            <p className="news-content__article-release-date">
                                                {newsArticle.release_date}
                                            </p>
                                            <h3 className="news-content__article-title">
                                                {newsArticle.title}
                                            </h3>
                                        </article>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default NewsContent;