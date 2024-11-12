import "./GetTicketNow.css";

export default function GetTicketNow() {
    return (
        <div className="get-ticket-container">
            <div className="get-now-sec">
                <div className="get-now-left">
                    <div className="text-wrapper">
                        <div className="get-now-text">
                            <h2>GET TICKET <span>NOW!</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmtempor incidi</p>
                        </div>
                        <button>BUY TICKET</button>
                    </div>
                </div>
                <div className="get-now-right">
                    <img src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-ticket.png" alt="" />
                </div>
            </div>
        </div>
    )
}