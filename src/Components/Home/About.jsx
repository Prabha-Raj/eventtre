import "./About.css";

export default function About(){
    return(
        <div className="about-section">
            <div className="left">
                <div>
                {/* https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png */}
                    <img src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/featured-speaker.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <h1> <span style={{fontSize:"40px",fontWeight:"600"}}>About The</span><span style={{fontSize:"40px",fontStyle:"italic",marginLeft:"15px", color:"#ff6600"}}>Eventre</span></h1>
                <p  style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</p>
                <p style={{fontSize:"16px",color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</p>
                <div>
                    <button style={{color:"white", backgroundColor:"#ff6600"}}>BUY TICKET</button>
                    <button>READ MORE</button>
                </div>
            </div>

        </div>
    )
}
