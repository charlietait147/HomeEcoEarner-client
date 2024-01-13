import "./NewsContent.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/Config";
import { Link } from "react-router-dom";
import sunshineImage from "../../assets/images/sunshine.jpg";
import homeEcoEarnerSnippet from "../../assets/images/home-ecoearner-snippet.jpg";


function NewsContent() {
    const [newsList, setNewsList] = useState([]);
    // const [defaultNewsList, setDefaultNewsList] = useState([]);
    // const [inputValue, setInputValue] = useState("");

    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    const getNewsList = async () => {
        try {
            const response = await axios(`${API_URL}/news`);
            const fetchNews = response.data
            setNewsList(fetchNews)
            // setDefaultNewsList(fetchNews);
        } catch (error) {
            console.log("Unable to retrieve users" + error);
        }
    }
    useEffect(() => {
        getNewsList();
    }, [])

    // const clickHandler = () => {

    //     const filteredNewsList = newsList.filter((news) => {
    //         return news.release_date.includes(inputValue) || news.title.includes(inputValue)
    //     })

    //     setNewsList(filteredNewsList)

    //     if (inputValue === "") {
    //         setNewsList(defaultNewsList);
    //     }
    // }

    // useEffect(() => {
    //     clickHandler();
    // }, [inputValue])

    return (
        <section className="news-content">
            <div className="news-content__wrapper">
                <div className="news-content__news-article-container">
                    {/* <p className="news-content__search-title">FILTER/SEARCH:</p>
                    <div className="news-content__search-container">
                        <input type="text" className="news-content__filter-search" id="search" onChange={handleChange} />
                    </div> */}
                    <div className="news-content__news-container" >
                        <p className="news-content__results"> ({newsList.length} Results) </p>
                        <div className="news-content__cards-container">
                            {/* {newsList.map((news) => {
                                return (
                                    <div className="news-content__card-container" key={news.id}>
                                        <article className="news-content__card">
                                            <Link to = {`/news/${news.id}`}><img src={news.image} alt="" className="news-content__article-image" /></Link>
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
                            )} */}
                            <div className="news-content__card-container">
                                <article className="news-content__card">
                                    <div className="news-content__image-container">
                                        <Link to="unleash-the-power-of-your-home-turn-sunshine-into-cash-with-solar-and-battery-systems"><img src={sunshineImage} alt="" className="news-content__article-image" /></Link>
                                    </div>
                                    <p className="news-content__article-release-date">December 30, 2023</p>
                                    <h3 className="news-content__article-title">Unleash the Power of Your Home: Turn Sunshine into Cash with Solar and Battery Systems!</h3>
                                </article>
                            </div>
                            <div className="news-content__card-container">
                                <article className="news-content__card">
                                    <div className="news-content__image-container">
                                        <Link to="energy-freedom-at-your-fingertips"><img src={homeEcoEarnerSnippet} alt="" className="news-content__article-image" /></Link>
                                    </div>
                                    <p className="news-content__article-release-date">January 13, 2024</p>
                                    <h3 className="news-content__article-title">Energy Freedom At Your Fingertips!</h3>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default NewsContent;