import React from 'react'
import MainProperty from './MainProperty'

const DetailProperty = () => {
    return (
        <div className="detailPropertyListDiv">
            <div className="propertyListTitleDiv">
                <label className="propertyListTitle">
                    Featured Properties
                </label>
                <span className="propertyListViewAllButton">View All</span>
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