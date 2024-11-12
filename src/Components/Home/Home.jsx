import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Speakers from "./Speakers";
import Schedule from "../ScheduleSec/Schedule";
import RegisterSec from "../RegisterSec/RegisterSec";
import GetTicketSec from "../GetTicketSec/GetTicketSec";
import OurSponsors from "../OurSponsorSec/OurSponsors";
import NewsSec from "../NewsSec/NewsSec";
import SubscribeSec from "../SubscribeSec/SubscribeSec";
import MapSec from "../MapSec/MapSec";
import Footer from "../Footer/Footer";
export default function Home(){
    return(
        <div className="home-body">
        <Navbar/>
        <Hero/>
        <About/>
        <Speakers/>
        <Schedule/>
        <RegisterSec/>
        <GetTicketSec/>
        <OurSponsors/>
        <NewsSec/>
        <SubscribeSec/>
        <MapSec/>
        <Footer/>
        </div>
    )
}