import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import BasobasLogo from "../public/Images/BasobasLogo.svg";
import buldingLogo from "../public/Images/buldingLogo.svg";
import search from "../public/Images/search.svg";
import navPerson from "../public/Images/navPerson.svg";
import hamburger from "../public/Images/hamburger.svg";
import plus from "../public/Images/plus.svg";

const Navbar: NextPage = () => {
  const links: any = [
    "Buy",
    "Rent",
    "Home Loans",
    "Blogs",
    "Agencies",
    "Unit Converter",
  ];
  const router = useRouter();

  return (
    <>
      <div className="nav">
        <div className="leftDiv">
          <div className="hamburger">
            <Image src={hamburger} alt="no image" />
          </div>
          <h1 className="logo">
            <Image src={BasobasLogo} alt="no image" />
          </h1>
          <div className="linkDiv">
            {links.map((data: any) => (
              <Link key={data} href="#">
                <span className="linksData">{data}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rightDiv">
          <div className="searchIcon">
            <Image src={search} alt="no image" />
          </div>
          <div className="plus">
            <Image src={plus} alt="no image" />
          </div>
          <div className="buttonDiv">
            <button className="blueButton">
              <span>
                <Image src={buldingLogo} alt="no image" />
              </span>
              <p>List Your Property</p>
            </button>
            <div className="userDiv">
              <div className="imageDiv">
                <Image src={navPerson} alt="no image" />
              </div>
              <p className="name"> Ram Bahadur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
