import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { priceFormatter } from "../../utilities/helper";

const MainProperty = ({ data }: { data: any }) => {
  const router = useRouter();
  function redirect() {
    if (data.premium)
      window.open(`https://basobaas.com/premium/${data.slug}`, "_blank");
    else window.open(`https://basobaas.com/property/${data.slug}`, "_blank");
  }
  function check(word: string) {
    if (word?.length > 0 && word[0] == "/") return word.slice(1);
    else return word;
  }
  return (
    <>
      {/* <Link href={data.premium?`https://basobaas.com/premium/${data.slug}`:`https://basobaas.com/property/${data.slug}`} target="_blank"> */}
      <div className="card" onClick={redirect}>
        <div className="saleRentTag">
          <p>For {data.status}</p>
        </div>
        <div className="imageContainer">
          <Image
            fill
            src={
              data?.thumbnail?.replaceAll(
                "basobaasapi.asterdio.xyz",
                "basobaas.com/api"
              ) as any
            }
            alt={data?.thumbnail_alt}
            className="img"
          />
        </div>
        <div className="contentContainer">
          <div className="propertyPrice">
            <div className="priceDiv">
              <span className="price">
                NPR. {priceFormatter(data?.price)}
                {data?.price_postfix && " /"}{" "}
              </span>
              <span className="unit">{check(data?.price_postfix)}</span>
            </div>
          </div>
          <div className="propertyTitle">
            <p>{data?.title as string}</p>
          </div>
          <div className="propertyAddress">
            <p>
              <Icon
                icon="ph:map-pin-bold"
                color="#707580"
                width="18"
                height="18"
                inline={true}
                style={{ marginRight: "8px" }}
              />
              {data?.address as string}
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
              <div className="overViewText">
                <span className="overViewTags">{data?.bedroom_count}</span>
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
              <div className="overViewText">
                <span className="overViewTags">{data?.bathroom_count}</span>
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
              <div className="overViewText">
                <span className="overViewTags">{data?.area_covered}</span>
                <span className="overViewTags">{data?.area_units}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProperty;
