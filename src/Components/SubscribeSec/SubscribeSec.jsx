import "./SubscribeSec.css"

export default function SubscribeSec(){
    return(
        <div className="subscribe-sec">
            <div className="subscribe-wrapper">
            <div className="subscrib-text">
                <h2>Subscribe to Our <span>Newletter</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</p>
            </div>
            <input type="email" placeholder="Email"/>
            <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}