import "./GetTicketSec.css"
import GetTicketNow from "./GetTicketNow"
export default function GetTicketSec() {
    return (
        <>
        <div className="ticket-sec">
            <h1>Get <span>ticket</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
            <div className="ticket-card-wrapper">
                <div className="ticket-card">
                    <div className="sec1">
                        <div style={{fontSize:"23px"}}>STARTER</div>
                        <hr />
                        <div><span style={{fontSize:"65px"}}>39.00</span> <span style={{fontSize:"25px"}}>$</span></div>
                        <div className="person">/Person</div>
                    </div>
                    <div className="sec2">
                        <div><i className="fa fa-check-circle available"></i> 1 Comfortable Seats</div>
                        <div><i className="fa fa-check-circle available"></i> Free Lunch and Coffee</div>
                        <div><i className="fa fa-times-circle unavailable"></i> Certificate</div>
                        <div><i className="fa fa-times-circle unavailable"></i> Easy Access</div>
                    </div>
                    <div className="sec3">
                        <button>BUY A TICKET</button>
                    </div>
                </div>
                
                <div className="ticket-card standard-card">
                    <div className="sec1" style={{backgroundColor:"#ff6600", color:"white"}}>
                        <div style={{fontSize:"23px"}}>STANDARD</div>
                        <hr />
                        <div><span style={{fontSize:"65px"}}>49.00</span> <span style={{fontSize:"25px"}}>$</span></div>
                        <div style={{fontSize:"20px",color:"white"}}>/Person</div>
                    </div>
                    <div className="sec2">
                        <div><i className="fa fa-check-circle available"></i> 1 Comfortable Seats</div>
                        <div><i className="fa fa-check-circle available"></i> Free Lunch and Coffee</div>
                        <div><i className="fa fa-check-circle available"></i> Certificate</div>
                        <div><i className="fa fa-times-circle unavailable"></i> Easy Access</div>
                    </div>
                    <div className="sec3">
                        <button>BUY A TICKET</button>
                    </div>
                </div>
                
                <div className="ticket-card">
                    <div className="sec1">
                        <div style={{fontSize:"23px"}}>Platinum</div>
                        <hr />
                        <div><span style={{fontSize:"65px"}}>99.00</span> <span style={{fontSize:"25px"}}>$</span></div>
                        <div className="person">/Person</div>
                    </div>
                    <div className="sec2">
                        <div><i className="fa fa-check-circle available"></i> 1 Comfortable Seats</div>
                        <div><i className="fa fa-check-circle available"></i> Free Lunch and Coffee</div>
                        <div><i className="fa fa-times-circle available"></i> Certificate</div>
                        <div><i className="fa fa-times-circle available"></i> Easy Access</div>
                    </div>
                    <div className="sec3">
                        <button>BUY A TICKET</button>
                    </div>
                </div>
                
            </div>
            
        </div>
        <GetTicketNow/>
        </>
    )
}