import "./Hero.css";
 export default function Hero(){
 return(
    <div className="hero-section">
        <div className="hero">
        <div className="text">
            <p style={{fontSize:"20px", color:"grey",lineHeight:"5px"}}>The countdown is finished!</p>
            <div style={{fontSize:"100px", color:"#ff6600",lineHeight:"120px"}}>BUSINESS</div>
            <div style={{fontSize:"100px", color:"#ff6600",lineHeight:"60px",fontStyle:"italic"}}>CONFERENCE 2017</div>
            <p style={{fontSize:"20px",marginTop:'20px',color:"#e9e7e7"}}>02-05 July 2017 California</p>
        </div>
        <div className="button">
            <button style={{wordSpacing:"1px",height:"50px", width:"200px", backgroundColor:"white", padding:"5px", whiteSpace:"1px"}} className="btn"> GET TICKET NOW</button>
        </div>
        </div>
    </div>
 )
 }