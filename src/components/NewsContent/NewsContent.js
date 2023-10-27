import "./NewsContent.scss"
import axios from "axios";
import { useEffect, useState } from "react";

function NewsContent() {
    const [newsList, setNewsList] = useState([]);
    const [defaultNewsList, setDefaultNewsList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const getNewsList = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_API_URL}/news`);
            const fetchNews = response.data
            setNewsList(fetchNews)
            setDefaultNewsList(fetchNews);
        } catch (error) {
            console.log("Unable to retrieve users" + error);
        }
    }
    useEffect(() => {
        getNewsList();
    }, [])

    const clickHandler = () => {

        const filteredNewsList = newsList.filter((news) => {
            return news.release_date.includes(inputValue) || news.title.includes(inputValue)
        })

        setNewsList(filteredNewsList)

        if (inputValue === "") {
            setNewsList(defaultNewsList);
        }
    }

    useEffect(() => {
        clickHandler();
    }, [inputValue])

    return (
        <section className="news-content">
            <div className="news-content__banner">
                <span className="news-content__header">NEWS</span>
            </div>
            <div className="news-content__wrapper">
                <div className="news-content__news-article-container">
                    {/* <p className="news-content__search-title">FILTER/SEARCH:</p>
                    <div className="news-content__search-container">
                        <input type="text" className="news-content__filter-search" id="search" onChange={handleChange} />
                    </div> */}
                    <div className="news-content__news-container" >
                        <p className="news-content__results"> ({newsList.length} Results) </p>
                        <div className="news-content__cards-container">
                            {newsList.map((news) => {
                                return (
                                    <div className="news-content__card-container" key={news.id}>
                                        <article className="news-content__card">
                                            <img src={news.image} alt="" className="news-content__article-image" />
                                            <p className="news-content__article-release-date">
                                                {news.release_date}
                                            </p>
                                            <h3 className="news-content__article-title">
                                                {news.title}
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