import { Icon } from "@iconify/react";
import Image from "next/image";
import { useAppSelector } from "../../state";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { dateFormatter } from "../../utilities/helper";

const HomeLoan = () => {
  const router = useRouter();
  const homeLoanData = useAppSelector(
    (state) => state.blogData.home_loan.items
  );

  return (
    <>
      <div className="homeLoanTitleDiv">
        <label className="homeLoanTitle">होम लोन</label>
        <Link href={"/category/home_loan"}>
          <span className="homeLoanViewAllButton">सबै हेर्नुहोस्</span>
        </Link>
      </div>
      <div className="homeLoanCardDiv">
        {homeLoanData.map((data: any, index: number) => (
          <div
            className="homeLoanCard"
            key={index}
            onClick={() => {
              router.push(`/blog/${data?.slug}`);
            }}
          >
            <div className="homeLoan">
              <div className="imageContainer">
                <Image
                  className="homeLoanImage"
                  src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
                    data.id
                  }/${data.images[0]}`}
                  fill
                  alt="basobaas Nepal"
                />
              </div>
              <div className="blogContents">
                <div className="blogHeader">
                  <p>{data.title_np}</p>
                </div>
                <div className="blogBy">
                  <span className="author">राजन अधिकारी</span>
                  <span className="separator">
                    <Icon
                      icon="ci:dot-05-xl"
                      width="15"
                      height="15"
                      color="#969696"
                    />
                  </span>
                  <span className="posted">
                    {dateFormatter(moment(`${data?.created}`).fromNow())}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeLoan;
