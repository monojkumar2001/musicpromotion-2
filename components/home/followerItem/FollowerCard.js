import React from 'react'
import Image from 'next/image'
const FollowerCard = ({img, title, description}) => {
  return (
    <>
    <div className="follower-icon-img">
                <Image width={130} height={130} src={img} alt="" />
                </div>
                 <h4>{title}</h4>
                 <p>{description}</p>
    </>
  )
}

export default FollowerCard