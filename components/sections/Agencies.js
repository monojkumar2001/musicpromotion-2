import React from "react";
import AgenciesData from "../home/agenciesData/AgenciesData";

function Agencies({ type = "one" }) {
  return (
    <div className={`agencies type-${type}`}>
      <div className="container">
        <div className="agencies-wrapper">
          <div
            className="agencies-content-warpper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="section-title">
              What makes musicpromotiontoday diffrent from other agencies
            </h1>
          </div>
          <div
            className="agencies-table"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col">MPT</th>
                  <th scope="col">Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                <AgenciesData />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agencies;
