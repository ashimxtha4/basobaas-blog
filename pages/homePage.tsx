import MainLayout from "../layouts/mainLayout"
import BlogNavbar from "../layouts/BlogNavbar"
import HomeBlogTypeSmall from "../components/ui/HomeBlogTypeSmall"


const HomePage = () => {
    return (
        <>
            <div className="alignmentContainer">
                <div className="navBlend">
                </div>

                <div className="contentDiv">
                    <div className="aboveNavDiv">
                        <div className="newsDiv">
                            <div className="newsHeader">News & Insights</div>
                            <div className="newsTexts">We provide you the complete new about real estate.</div>
                            <div className="firstAdDiv"></div>
                        </div>
                    </div>

                    <div className="secNavDiv">
                        <BlogNavbar/>
                    </div>

                    <div className="contentBody">
                        <div className="blogPreviewDiv">
                            <div className="bigComponent"></div>
                            <div className="smallComponentDiv">
                                <div className="smallComponent"><HomeBlogTypeSmall/></div>
                                <div className="smallComponent"><HomeBlogTypeSmall/></div>
                                <div className="smallComponent"><HomeBlogTypeSmall/></div>
                                <div className="smallComponent"><HomeBlogTypeSmall/></div>
                            </div>
                        </div>

                        <div className="adDiv">

                        </div>

                        <div className="marketNewsDiv">
                            <div className="titleDiv">
                                <label className="title">Market New</label>
                                <span className="viewAllButton">View All</span>
                            </div>
                            <div className="marketNewsContentDiv">
                                <div className="marketBigComponent"></div>
                                <div className="marketSmallComponentDIv">
                                    <div className="marketSmallComponent"></div>
                                    <div className="marketSmallComponent"></div>
                                    <div className="marketSmallComponent"></div>
                                    <div className="marketSmallComponent"></div>
                                </div>
                            </div>
                        </div>

                        <div className="adDiv"></div>

                        <div className="propertyListDiv">

                        </div>

                    </div>

                    <div className="contentFooter">

                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage