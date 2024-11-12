import "./NewsSec.css";

export default function NewsSec(){
    return(
        <>
        <div className="news-section">
          <h1>Eventre <span>News</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore dolore</p>
          <div className="news-card-wrapper">
            <div className="news-card">
                <div className="up">
                    <img src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-one.jpg" alt="" />
                </div>
                <div className="day">
                    <p style={{fontSize:"30px", fontWeight:"bolder", color:"white"}}>20</p>
                    <p style={{fontSize:"19px", color:"white"}}>May</p>
                </div>
                <div className="down">
                    <p>Elementum purus id ultrices.</p>
                    <hr />
                    <div className="oprations">
                        <div><i className="ri-user-line"></i> <span>Admin</span></div>
                        <div><i className="ri-heart-line"></i> <span>350</span></div>
                        <div><i className="fa-regular fa-comment-dots"></i> <span>30</span></div>
                    </div>
                </div>
            </div>
            <div className="news-card">
                <div className="up">
                    <img src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-one.jpg" alt="" />
                </div>
                <div className="day">
                    <p style={{fontSize:"30px", fontWeight:"bolder", color:"white"}}>20</p>
                    <p style={{fontSize:"19px", color:"white"}}>May</p>
                </div>
                <div className="down">
                    <p>Elementum purus id ultrices.</p>
                    <hr />
                    <div className="oprations">
                        <div><i className="ri-user-line"></i> <span>Admin</span></div>
                        <div><i className="ri-heart-line"></i> <span>350</span></div>
                        <div><i className="fa-regular fa-comment-dots"></i> <span>30</span></div>
                    </div>
                </div>
            </div>
            <div className="news-card">
                <div className="up">
                    <img src="https://demo.themefisher.com/eventre-bootstrap/images/news/post-thumb-one.jpg" alt="" />
                </div>
                <div className="day">
                    <p style={{fontSize:"30px", fontWeight:"bolder", color:"white"}}>20</p>
                    <p style={{fontSize:"19px", color:"white"}}>May</p>
                </div>
                <div className="down">
                    <p>Elementum purus id ultrices.</p>
                    <hr />
                    <div className="oprations">
                        <div><i className="ri-user-line"></i> <span>Admin</span></div>
                        <div><i className="ri-heart-line"></i> <span>350</span></div>
                        <div><i className="fa-regular fa-comment-dots"></i> <span>30</span></div>
                    </div>
                </div>
            </div>

          </div>
        </div>
        </>
    )
}