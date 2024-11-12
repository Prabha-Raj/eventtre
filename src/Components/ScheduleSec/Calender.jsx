import "./Calender.css";

export default function Calender(){
    return(
        <div className="calender-wrapper">
            <table>
                <thead>
                    <tr style={{backgroundColor:"#ff6600"}}>
                        <th>TIME</th>
                        <th>SPEAKER</th>
                        <th>SUBJECT</th>
                        <th>VENUE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start" }}><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-one.jpg" alt="" /><span>Samanta Doe</span></td>
                        <td>Introduction to Wp</td>
                        <td>Auditorium A</td>
                    </tr>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start"}} ><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-two.jpg" alt="" /><span>Lee Mun</span></td>
                        <td>Principle of Wp</td>
                        <td>Auditorium B</td>
                    </tr>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start"}} ><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-three.jpg" alt="" /><span>Zerad Pawel</span></td>
                        <td> Useful tips for Wp</td>
                        <td>Auditorium C</td>
                    </tr>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start"}}><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-four.jpg" alt="" /><span>Henry Mong</span></td>
                        <td> Useful tips for Wp</td>
                        <td>Auditorium D</td>
                    </tr>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start"}}><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-five.jpg" alt="" /><span>Baily Leo</span></td>
                        <td> Wp Requirements</td>
                        <td>Auditorium E</td>
                    </tr>
                    <tr>
                        <td><i className="ri-time-line text-slate-500 font-bold"></i><span>9.00 AM</span></td>
                        <td style={{gap:"18px", justifyContent:"start"}}><img style={{borderRadius:"50%"}} src="https://demo.themefisher.com/eventre-bootstrap/images/speakers/speaker-thumb-six.jpg" alt="" /><span>Lee Mun</span></td>
                        <td>Principle of Wp</td>
                        <td>Auditorium F</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}