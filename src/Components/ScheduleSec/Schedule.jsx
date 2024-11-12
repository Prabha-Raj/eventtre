import "./Schedule.css";
import Calender from "./Calender";
export default function Schedule(){
    return(
        <div className="schedule-container">
            <div className="top">
                <div className="schedule-heading">
                    <h1 className="text-5xl font-medium">Event <span style={{fontStyle:"italic", color:"#ff6600"}}>Schedule</span></h1>
                    <p className="text-slate-400 " style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
                </div>
                <div className="schedule-nav">
                    <div className="item">
                        <h1>DAY-01</h1>
                        <p>20 NOVEMBER 2017</p>
                    </div>
                    <div className="item">
                        <h1>DAY-01</h1>
                        <p>20 NOVEMBER 2017</p>
                    </div>
                    <div className="item">
                        <h1>DAY-01</h1>
                        <p>20 NOVEMBER 2017</p>
                    </div>

                </div>
            </div>
            <div className="bottum">
                <div className="calender-container">
                    {/* <div className="calender-body"> */}
                    <Calender/>         
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}