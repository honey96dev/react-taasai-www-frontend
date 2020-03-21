import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="about-us ptb-100 gray-light-bg">
          <div id="cashback_section" className="container">
            <div className="row align-items-center">
              <div className="col-md-7 order-1 order-md-0">
                <h1 className="ride-heading">Simply spend local and get cash back from our retail partners - all paid back directly into the app</h1>
                {/*<p>Pick your destination, request a ride, meet your driver, enjoy the journey.</p>*/}
              </div>
              <div className="col-md-5 order-0 order-md-1">
                <div className="about-content-right">
                  <img
                    src="img/image-11.png"
                    // src="img/delivery-app.svg"
                    width="500"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
