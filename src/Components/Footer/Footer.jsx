import "./Footer.css";

export default function Footer(){
    return(
        <>
        <div className="footer">
            <h2>Even<span>tre</span></h2>
            <div className="social-icons-wrapper">
                <div className="social-icon"><i className="ri-facebook-fill"></i></div>
                <div className="social-icon"><i className="ri-twitter-fill"></i></div>
                <div className="social-icon"><i className="ri-instagram-line"></i></div>
                <div className="social-icon"><i className="ri-rss-fill"></i></div>
                <div className="social-icon"><i className="ri-vimeo-fill"></i></div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyright-text"><span>Eventre</span> © 2021, Designed & Developed by <span>Themefisher</span></div>
            <div className="go-on-top">
                <a href="#">
            <i className="ri-arrow-up-s-line"></i>
            </a>
            </div>
        </div>
        </>
    )
}