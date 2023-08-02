import Image from 'next/image';
const MarketingAgenchy = ({ data, type = "one" }) => {
    return (
        <div className="services">
        <div className="container">
          <div className="title-wrapper"data-aos="fade-up"
        data-aos-duration="1000">
              <h1 className="section-title">A Certified Music Marketing Agency</h1>
          </div>
          <div className="services-wrapper Agenchy-items">
            <div className="Agenchy-item" data-aos="fade-up"
        data-aos-duration="1000">
            <Image src="/assets/home-1/img/marketing-1.svg" alt="music promotion today" width={213} height={84} />
            </div>
            <div className="Agenchy-item" data-aos="fade-up"
        data-aos-duration="1500">
            <Image src="/assets/home-1/img/marketing-2.svg" alt="music promotion today" width={224} height={126} />
            </div>
            <div className="Agenchy-item" data-aos="fade-up"
        data-aos-duration="2000">
            <Image src="/assets/home-1/img/marketing-3.svg" alt="music promotion today" width={245} height={108} />
            </div>
            <div className="Agenchy-item" data-aos="fade-up"
        data-aos-duration="2500">
            <Image src="/assets/home-1/img/marketing-4.svg" alt="music promotion today" width={136} height={137} />
            </div>
          </div>
          <div className="agenchy-img" data-aos="fade-up"
        data-aos-duration="1000">
          <Image src="/assets/home-1/img/agenchy.svg" alt="music promotion today" width={1434} height={266} />
          </div>
        </div>
      </div>
    );
  };
  
  export default MarketingAgenchy;
  