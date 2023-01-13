import React from 'react'
import MainProperty from './MainProperty'
import FeaturedPropertyImage1 from "../../public/Images/featuredPropertyImage1.svg";
import FeaturedPropertyImage2 from "../../public/Images/featuredPropertyImage2.svg";
import FeaturedPropertyImage3 from "../../public/Images/featuredPropertyImage3.svg";
import FeaturedPropertyImage4 from "../../public/Images/featuredPropertyImage4.svg";
import LifestyleImages from "../../public/Images/LifestyleImages.svg";

const DetailProperty = () => {
    const dummyPropertyData: any = [
        {
            photo: FeaturedPropertyImage3,
            title: "Padma Colony",
            address: "Sitapaila Rd 5, Nagarjun 44600",
            beds: 4,
            bath: 5,
            sqft: 1790,
            price: "5.75 Crore",
            priceLabel: "Total Price",
        },
        {
            photo: FeaturedPropertyImage4,
            title: "Karyabinayak Homes",
            address: "Karyabinayak, Lalitpur",
            beds: 2,
            bath: 1,
            sqft: 1200,
            price: "20 Thousand",
            priceLabel: "sq.ft",
        },
        {
            photo: FeaturedPropertyImage2,
            title: "Civil Homes",
            address: "Kalimati, Kathmandu",
            beds: 3,
            bath: 3,
            sqft: 3200,
            price: "3.55 Crore",
            priceLabel: "Onwards",
        },
        {
            photo: LifestyleImages,
            title: "Ranjana Complex",
            address: "New-Road, Kathmandu",
            beds: 0,
            bath: 0,
            sqft: 3651,
            price: "50 Lakhs",
            priceLabel: "month",
        },
        {
            photo: FeaturedPropertyImage1,
            title: "Vinayak Colony",
            address: "Bhaisipati, Lalitpur",
            beds: 5,
            bath: 4,
            sqft: 4200,
            price: "9.5 Crore",
            priceLabel: "Total Price",
        }
    ];
    return (
        <div className="detailPropertyListDiv">
            <div className="propertyListTitleDiv">
                <label className="propertyListTitle">
                    विशेष घर जग्गाहरु
                </label>
                <span className="propertyListViewAllButton">सबै हेर्नुहोस्</span>
            </div>
            <div className="propertyCardDiv">
            {dummyPropertyData.map((data:any, index:number) => <div className="propertyCard" key={index}>
                    <MainProperty data={data} />
                  </div>)}
            </div>
        </div>
    )
}

export default DetailProperty