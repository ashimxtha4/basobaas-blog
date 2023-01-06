import Link from "next/link";
import React from "react";
import footerLogo from "../public/Images/footerLogo.svg"
import playStore from "../public/Images/playStore.svg"
import appStore from "../public/Images/appStore.svg"
import facebook from "../public/Images/facebook.svg"
import instagram from "../public/Images/instagram.svg"


import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footerUpperDiv">
        <div className="firstDiv">
          <div className="logoAndContact">
            <div className="logoDiv"><Image src={footerLogo} alt="noImage" /></div>
            <div className="contactDiv">
              <span className="contacts">support@basobaas.com</span>
              <span className="contacts">+977 9876543210</span>
              <span className="contacts">Basobaas Nepal Pvt.Ltd</span>
            </div>
          </div>
          <div className="appDiv">
            <div className="appHeading">Download our App</div>
            <div className="iconDiv">
              <div className="icons"><Image className="image" src={playStore} alt="noImage" /></div>
              <div className="icons"><Image className="image" src={appStore} alt="noImage" /></div>
            </div>
          </div>
        </div>

        <div className="categoryDiv">
          <div className="gorupThree">
            <div className="popularArea">
              <div className="popularAreaHeading">Popular Area</div>
              <div className="popularAreaContent">
              <span className="popularAreaContentSpan">Budnikantha | Imadol</span>
                <span className="popularAreaContentSpan">Kapan | Sitapaila</span>
                <span className="popularAreaContentSpan">Dhumbarahi | Thamel</span>
                <span className="popularAreaContentSpan">Butwal | Chabel</span>
                <span className="popularAreaContentSpan">Thankot | Naxal</span>
              </div>
            </div>
            <div className="gorupThreeChild">
              <div className="gorupThreeChildHeading">Quick Links</div>
              <div className="gorupThreeChildContent">
                <span className="gorupThreeChildContentSpan">Login as Agency</span>
                <span className="gorupThreeChildContentSpan">Privacy</span>
                <span className="gorupThreeChildContentSpan">Term Of Use</span>
                <span className="gorupThreeChildContentSpan">Advertise</span>
                <span className="gorupThreeChildContentSpan">Listing Policy</span>

              </div>
            </div>
            <div className="gorupThreeChild">
              <div className="gorupThreeChildHeading">Category</div>
              <div className="gorupThreeChildContent">
                <span className="gorupThreeChildContentSpan">About</span>
                <span className="gorupThreeChildContentSpan">Buying Guide</span>
                <span className="gorupThreeChildContentSpan">Careers</span>
                <span className="gorupThreeChildContentSpan">Contact</span>
                <span className="gorupThreeChildContentSpan">Add Your Property</span>
              </div>
            </div>
          </div>
          <div className="socialDiv">
            <div className="socialHeading">Socials</div>
            <div className="socialContent">
              <div className="socialList">
                <span className="socialIcon">
                <Image className="image" src={instagram} alt="noImage" />
                </span>
                <span className="socialName">Instagram</span>
              </div>
              <div className="socialList">
                <span className="socialIcon">
                  <Image className="image" src={facebook} alt="noImage" />
                  </span>
                <span className="socialName">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerLowerDiv">
        <div className="disclaimerHeading">Disclaimer</div>
        <div className="disclaimerContent ">
        Basobaas.com (Basobas Nepal) is only an intermediary offering its platform to facilitate 
        the transactions between Seller and Customer/Buyer/User and is not and cannot be a party 
        to or control in any manner any transactions between the Seller and the Customer/Buyer/User. 
        All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s)
        /Agent(s)/Agency(s) who have advertised their products. Basobaas.com is only communicating the offers
         and not selling or rendering any of those products or services. It neither warrants nor is it making 
         any representations with respect to offer(s) made on the site. Basobaas.com shall neither be responsible 
         nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller 
         and both Seller and Customer/Buyer/User shall settle all such disputes without involving Basobaas.com in any manner.
        </div>
      </div>
    </>
  );
};

export default Footer;




