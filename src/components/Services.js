import '../css/service.css'

export default function Services(){
    return (
        <div className="service-container1">
        <h1 className="service-title">Services</h1> 
        <div className="service-container">
            <div>
                <h3>Pressure Cleaning</h3>
                <p>Residential</p>
                <p>Commercial</p>
                <p>Roof Cleaning</p>
            </div>
            <div>
                <h3>Window Washing</h3>
                <p>Residential</p>
                <p>Commercial</p>
                <p></p>
            </div>
            <div className="final-div">
                <h3>Soft Cleaning</h3>
                <p>Residential</p>
                <p>Commercial</p>
            </div>
        </div>
        <button className="button">Contact For A Free Quote</button>
        </div>
    )
}