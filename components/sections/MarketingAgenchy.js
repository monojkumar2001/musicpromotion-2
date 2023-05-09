const MarketingAgenchy = ({ data, type = "one" }) => {
    return (
        <div className="services">
        <div className="container">
          <div className="title-wrapper">
              <h1 className="section-title">A Certified Music Marketing Agency</h1>
          </div>
          <div className="services-wrapper">
            <div className="Agenchy-item">
            <img src="/assets/home-1/img/marketing-1.svg" alt="" />
            </div>
            <div className="Agenchy-item">
            <img src="/assets/home-1/img/marketing-2.svg" alt="" />
            </div>
            <div className="Agenchy-item">
            <img src="/assets/home-1/img/marketing-3.svg" alt="" />
            </div>
            <div className="Agenchy-item">
            <img src="/assets/home-1/img/marketing-4.svg" alt="" />
            </div>
          </div>
          <div className="agenchy-img">
          <img src="/assets/home-1/img/agenchy.svg" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default MarketingAgenchy;
  