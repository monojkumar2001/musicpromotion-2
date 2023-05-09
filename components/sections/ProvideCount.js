import React from "react";
import CountUp from "react-countup";
const ProvideCount = ({ type = "one" }) => {
	return (
	
        <div className="provide-count">
        <div className="container">
     <div className="provide-count-wrapper">
     <div className="provide-count-item">
            <p>Provide a song that are ready to accompany Your Lonely</p>
          </div>
          <div className="provide-count-item">
          <div className="provide-count-list">
            <p className="count">
            <CountUp end={100} duration={2} />
            <span className="provide-count-span">+</span>
            </p>
            <span>Artist</span>
          </div>
          <div className="provide-count-list">
            <p className="count">
            <CountUp end={5} duration={2} />
            m<span className="provide-count-span">+</span>
            </p>
            <span>Songs</span>
          </div>
          <div className="provide-count-list">
            <p className="count">
            <CountUp end={50} duration={2} />
            <span className="provide-count-span">+</span>
            </p>
            <span>Albums</span>
          </div>
          </div>
     </div>
        </div>
      </div>
	);
};

export default ProvideCount;
