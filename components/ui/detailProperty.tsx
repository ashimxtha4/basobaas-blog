import React from 'react'
import MainProperty from './MainProperty'

const DetailProperty = () => {
    return (
        <div className="detailPropertyListDiv">
            <div className="propertyListTitleDiv">
                <label className="propertyListTitle">
                विशेष गुणहरू
                </label>
                <span className="propertyListViewAllButton">सबै हेर्नुहोस्</span>
            </div>
            <div className="propertyCardDiv">
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
                <div className="propertyCard"><MainProperty /></div>
            </div>
        </div>
    )
}

export default DetailProperty