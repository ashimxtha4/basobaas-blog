import React from 'react'
import { Priceformatter } from '../../utilities/helper'
import { Icon } from "@iconify/react";
import propertyImage from "../../public/Images/propertyImage.svg"
import Image from 'next/image';

const MainProperty = (props:any) => {
  return (
    <>
      <div className="card">
        <div className="imageContainer">
          <Image src={props.data.photo as any} alt="noImage" className='img' />
          {/* <img className="image" src={IMG_URL + property.propertyImages[0]} /> */}
        </div>
        <div className="contentContainer">
          <div className="propertyTitle">
            <p>
              {/* {property.pricing.title} */}
              {props.data.title as string}
            </p>
          </div>
          <div className="propertyAddress">
            <p>
              <Icon icon="ph:map-pin-bold" color="#707580" width="18" height="18" inline={true} style={{ marginRight: "8px" }} />
              {/* {property.location?.streetName}, {property.location?.locality} */}
              {props.data.address as string}
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
              <div className='overViewText'>
                <span className="overViewTags">
                  {/* {property.overview?.bedRoom} */}
                  {props.data.beds}
                </span>
                <span className="overViewTags">Beds</span>
              </div>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="majesticons:bath-shower-line"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <div className='overViewText'>
                <span className="overViewTags">
                  {/* {property.overview?.bathRoom} */}
                  {props.data.bath}
                </span>
                <span className="overViewTags">Bath</span>
              </div>
            </div>
            <div className="overviewDatas">
              <span className="iconContainer">
                <Icon
                  icon="bxs:area"
                  color="#707580"
                  className="overviewIcons"
                />
              </span>
              <div className='overViewText'>
                <span className="overViewTags">{props.data.sqft}</span>
                <span className="overViewTags">sq.ft</span>
              </div>
            </div>
          </div>
          <div className="propertyPrice">
            <div className='priceDiv'>
              <span className="price">
                {/* NPR. {Priceformatter(property.pricing?.price)} */}
                NPR. {props.data.price}
              </span>
              <span className="unit">
                {/* / {property.pricing?.label} */}
                /{props.data.priceLabel}
              </span>
            </div>

            <button className='contactButtonContainer'>Contact</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainProperty