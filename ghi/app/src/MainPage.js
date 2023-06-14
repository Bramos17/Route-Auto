import './index.css';

function MainPage() {
  return (
    <><div className="main-px-4 py-5 text-center" id="mainContainer">
      <h1 className="display-5 fw-bold" id="mainHeading">Rute Auto</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4" id="slogan">
          The pinnacle solution for dealership management!
        </p>
        <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={'carlogo.png'}className="d-block w-100" alt="slide1" />
            </div>
            <div className="carousel-item">
              <img src="https://www.motortrend.com/uploads/sites/5/2021/07/2022_Bentley_Bentayga_Hybrid-02.jpg?fit=around%7C719.5999999999999:449.74999999999994f" className="d-block w-100" alt="slide2" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.rebelmouse.io/media-library/image.jpg?id=31793174&width=1200&height=800&quality=90&coordinates=62%2C0%2C62%2C0" className="d-block w-100" alt="slide3" />
            </div>
          </div>
        </div></div>
    </div><div className="px-4 py-5">
      </div></>
  );
}

export default MainPage;
