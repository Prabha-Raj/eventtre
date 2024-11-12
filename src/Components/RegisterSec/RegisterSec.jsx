import "./RegisterSec.css";

export default function RegisterSec(){
    return(
        <div className="register-section">
            <div className="left-sec">
                <div className="left-dummy"></div>
                <div className="box">
                    <div className="box-item"style={{border:"none",borderRight:"1px solid white", borderBottom:"1px solid white"}}>
                        <i className="fa fa-microphone"></i>
                        <p>8 SPEAKER</p>
                    </div>
                    <div className="box-item" style={{border:"none",borderLeft:"1px solid white", borderBottom:"1px solid white"}}>
                        <i className="fa fa-flag"></i>
                        <p>800 + SEATS</p>
                    </div>
                    <div className="box-item" style={{border:"none",borderTop:"1px solid white",borderRight:"1px solid white"}}>
                        <i className="fa fa-ticket" style={{transform:"rotate(-45deg)"}}></i>
                        <p>300 TICKETS</p>
                    </div>
                    <div className="box-item" style={{border:"none",borderLeft:"1px solid white",borderTop:"1px solid white"}}>
                        <i className="ri-calendar-2-line"></i>
                        <p>3 DAYS EVENT</p>
                    </div>
                </div>
            </div>
            <div className="right-sec">
                <div className="right-dummy"></div>
                <div className="form-wrapper">
                    <div className="form-text">
                        <h1>Registre to <span style={{fontStyle:"italic", color:"$ff6600"}}>Eventre</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                        <select name="" id="">
                            <option value="" style={{backgroundColor:"transparent", color:"white"}}>1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    <button style={{letterSpacing:"1px",width:"80%"}}>REGISTER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}