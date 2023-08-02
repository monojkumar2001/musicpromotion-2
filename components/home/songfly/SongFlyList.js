import React from "react";

const SongFlyList = ({ listItem }) => {
  return (
    <>
      <div className="songfly-list">
        <div className="songfly-squre"></div>
        <p>{listItem}</p>
      </div>
    </>
  );
};

export default SongFlyList;
