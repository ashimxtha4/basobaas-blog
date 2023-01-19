import { Icon } from "@iconify/react";
import Image from "next/image";
import OurThoughtsImage1 from "../../public/Images/homeLoanImage2.svg";
import OurThoughtsImage2 from "../../public/Images/homeLoanImage3.svg";
import OurThoughtsImage3 from "../../public/Images/homeLoanImage1.svg";
import { useAppSelector } from "../../state";

const OurThoughts = () => {
  const ourThoughtsData = useAppSelector(
    (state) => state.blogData.our_thoughts.items
  );
  const images = [OurThoughtsImage1, OurThoughtsImage2, OurThoughtsImage3];

  return (
    <>
      <div className="ourThoughtsTitleDiv">
        <label className="ourThoughtsTitle">हाम्रा विचारहरू</label>
        <span className="ourThoughtsViewAllButton">सबै हेर्नुहोस्</span>
      </div>
      <div className="ourThoughtsCardDiv">
        {ourThoughtsData.map((data: any, index: number) => (
          <div className="ourThoughtsCard">
            <div className="ourThoughts">
              <div className="imageContainer">
                <Image
                  className="ourThoughtsImage"
                  src={images[index]}
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>
                    नागढुंगा नौबिसे सुरुङमार्गकाे काम तीव्र, ७३ प्रतिशत भौतिक
                    प्रगति।
                  </p>
                </div>
                <div className="blogBy">
                  <span className="author">राजन मगर</span>
                  <span className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#969696"
                    />
                  </span>
                  <span className="posted">२ हप्ता अघि</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="ourThoughtsCard">
          <div className="ourThoughts">
            <div className="imageContainer">
              <Image
                className="ourThoughtsImage"
                src={OurThoughtsImage2}
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogHeader">
                <p>
                  पद्मा कोलोनीः उत्कृष्ट डिजाइनका घरमा आकर्षक फर्निचरको प्रयोग ।
                </p>
              </div>
              <div className="blogBy">
                <span className="author">कपिल कार्की</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">२ हप्ता अघि</span>
              </div>
            </div>
          </div>
        </div>
        <div className="ourThoughtsCard">
          <div className="ourThoughts">
            <div className="imageContainer">
              <Image
                className="ourThoughtsImage"
                src={OurThoughtsImage3}
                alt="basobaas Nepal"
              />
            </div>
            <div className="blogContents">
              <div className="blogHeader">
                <p>
                  तुलसी विवाह किन र कसरी गर्ने ! यस्ता छन् जान्नैपर्ने कुराहरू।
                </p>
              </div>
              <div className="blogBy">
                <span className="author">कमल पण्डित</span>
                <span className="separator">
                  <Icon
                    icon="ci:dot-05-xl"
                    width="15"
                    height="15"
                    color="#969696"
                  />
                </span>
                <span className="posted">२ महिना अघि</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OurThoughts;
