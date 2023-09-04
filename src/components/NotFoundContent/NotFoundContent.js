import "./NotFoundContent.scss";
function NotFoundContent() {
    return ( 
        <section className="not-found">
            <div className="not-found__wrapper">
                <div className="not-found__header"> Oops!</div>
                <p className = "not-found__page-info">404 - PAGE NOT FOUND</p>
                <p className = "not-found__page-description">The page you are looking for does not exist!</p>
                <div className="not-found__home-button-container">
                    <button className="not-found__home-button">GO TO HOMEPAGE</button>
                </div>
            </div>
        </section>
     );
}

export default NotFoundContent;