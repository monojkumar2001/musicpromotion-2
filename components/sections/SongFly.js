import SongFlyList from "../home/songfly/SongFlyList";
import Image from "next/image";
const SongFly = ({ data, type = "one" }) => {
  return (
    <div className="songFly services">
      <div className="container">
        <div className="songFly-wrapper">
          <div
            className="songFly-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="section-title">Reach new heights with SongFly</h1>
            <div className="songfly-list-item">
              <SongFlyList listItem="Requires Zero Digital Advertising knowledge" />
              <SongFlyList listItem="Deploy ads to Facebook, Instagram, Tiktok and more" />
              <SongFlyList listItem="Dont spend time and money on ad creatives" />
              <SongFlyList listItem="Automatic audience targeting just for your music" />
              <SongFlyList listItem="Create and test New ads with just few clicks!" />
              <SongFlyList listItem="Start a campaign for as low as $150 for 1 month!" />
            </div>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div
            className="songFly-right"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image width={798} height={663} src="/assets/home-1/img/songfly-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongFly;
