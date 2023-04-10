import "../css/home.css";


export default function Home() {

  return (
    <div className="home-container">
      <div className="home-title">
        <h1 className="title"><span>Pure </span>Quality</h1>
      </div>
      <div className="paragraph">
        <p>
          is your local Charlotte, NC based Pressure and Soft Washing Company.
          We take great pride in providing top quality work and service to home
          owners, businesses and property managers in the Mecklenburg area, as well as neighboring counties.
        </p>
      </div>
      <div className="home-image-container">
        <img className="home-image" alt="spinner" src="https://i.pinimg.com/originals/c8/4b/d5/c84bd5eb5962485518835fbcb86c27b4.gif"></img>
      </div>
    </div>
  );
}
