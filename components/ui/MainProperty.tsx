import React from 'react'
import { Priceformatter } from '../../utilities/helper'
import { Icon } from "@iconify/react";

const MainProperty = () => {
  return (
    <>
    <div className="card">
    <div className="imageContainer">
          {/* <img className="image" src={IMG_URL + property.propertyImages[0]} /> */}
        </div>
        <div className="contentContainer">
          <div className="propertyTitle">
            <p>
                {/* {property.pricing.title} */}
                ola
                </p>
          </div>
          <div className="propertyAddress">
            <p>
            <Icon icon="ph:map-pin-bold" color="#707580" width="18" height="18" inline={true} style={{marginRight:"8px"}}/>
              {/* {property.location?.streetName}, {property.location?.locality} */}
              ola2
            </p>
          </div>
          <div className="propertyOverview">
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="icon-park-solid:single-bed"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">
                {/* {property.overview?.bedRoom} */}
                23
                </span>
              <span className="overViewTags">Beds</span>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="majesticons:bath-shower-line"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">
                {/* {property.overview?.bathRoom} */}
                24
              </span>
              <span className="overViewTags">Bath</span>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="bxs:area"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <span className="overViewTags">5700</span>
              <span className="overViewTags">sq.ft</span>
            </div>
          </div>
          <div className="propertyPrice">
            <span className="price">
              {/* NPR. {Priceformatter(property.pricing?.price)} */}
              NPR. 3.50 Lakhs
            </span>
            <span className="unit">
              {/* / {property.pricing?.label} */}
            /Onwards
              </span>
              <span className='contactButtonContainer'><button className='contactButton'>Contact</button></span>
          </div>
        </div>
    </div>    
</>
  )
}

export default MainProperty