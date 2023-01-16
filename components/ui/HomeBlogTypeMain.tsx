import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBlogMainImage from "../../public/Images/blogDetailsImage1.svg";

const HomeBlogTypeMain = () => {
  const router = useRouter();
  return (
    <>
      <div className="homeBlogTypeMain">
        <div
          className="thumbnail"
          onClick={() => router.push(`blogDetails/${123}`)}
        >
          <Image
            className="blogCardBackground"
            src={HomeBlogMainImage}
            alt="Basobaas Nepal"
          />
        </div>
        <div className="cardContent">
          <div className="blogCategoryTag">
            <Link
              className="blogTagLinks"
              href="/कानूनरनिति/63a5c027fd935e139f0bab67"
            >
              <p>यात्रा</p>
            </Link>
          </div>
          <div className="blogTitle">
            <p>सबैभन्दा महँगो घर भएको नेपालको सबैभन्दा महँगो क्षेत्र।</p>
          </div>
          <div className="blogBy">
            <div className="author">राजन अधिकारी</div>
            <div className="separator">
              <Icon
                icon="ci:dot-05-xl"
                width="15"
                height="15"
                color="#FFFFFF"
              />
            </div>
            <div className="posted">२ हप्ता अघि</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogTypeMain;
