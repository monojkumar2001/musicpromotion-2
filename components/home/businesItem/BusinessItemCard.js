import React from 'react'

const BusinessItemCard = ({title, description}) => {
  return (
    <>
       <div className="business-item">
                <h3>{title}</h3>
                <p>
                 {description}
                </p>
</div>
    </>
  )
}

export default BusinessItemCard