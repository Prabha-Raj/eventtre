import "./MapSec.css";

export default function MapSec() {
    return (
        <div className="map-container">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11450.307347354388!2d79.05548023665486!3d26.739823791120372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39760a7d6d723d63%3A0xe2660267dde5149b!2sKalyanpur%20Etawah%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1729428143985!5m2!1sen!2sin"                 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="location-details">
                <h2> Docklands Convention</h2>
                <p><i className="fa-solid fa-house-chimney mx-2"></i> Street Address, Location,
                City, Country.</p>
                <p><i className="fa-solid fa-phone mx-2"></i> +91 8630049758</p>
                <button className="mt-5">GET DIRECTION</button>
            </div>
        </div>
    );
}
