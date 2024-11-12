import "./Navbar.css";

export default function Navbar(){
  return(
    <div className="row navbar">
      <div className="col-sm-2 nav-logo">
        <img src="https://demo.themefisher.com/eventre-bootstrap/images/logo.png" alt="NavLogo"/>
      </div>
      <div className="col-sm-8 nav-item-container">
        <div className="nav-item">
          <span>Home</span>
          <i className="ri-arrow-down-s-line ms-1" style={{fontSize:"20px"}}></i>
        </div><span>/</span>
        <div className="nav-item">
          <span>Speakers</span>
        </div><span>/</span>
        <div className="nav-item">
          <span>Pages</span>
          <i className="ri-arrow-down-s-line ms-1" style={{fontSize:"20px"}}></i>
        </div><span>/</span>
        <div className="nav-item">
          <span>Schedule</span>
        </div><span>/</span>
        <div className="nav-item">
          <span>Sponsors</span>
        </div><span>/</span>
        <div className="nav-item">
          <span>News</span>
          <i className="ri-arrow-down-s-line ms-1" style={{fontSize:"20px"}}></i>
        </div><span>/</span>
        <div className="nav-item">
          <span>Contact</span>
        </div>

      </div>
      <div className="col-sm-2 nav-ticket py-1">
        <div className="">
          <img src="https://demo.themefisher.com/eventre-bootstrap/images/icon/ticket.png" alt="" />
        </div>
        {/* <span className="" >|</span> */}
        <div className="nav-item">
          <h1 style={{color:"white", cursor:"pointer"}}>BUY TICKET</h1>
        </div>
      </div>
    </div>
  )
}