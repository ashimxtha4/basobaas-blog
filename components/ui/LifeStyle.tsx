import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { imageUrlCheck } from "../../utilities/helper";
import { getBlogByCategory } from "../../pages/index";

const LifeStyle = ({ id }: { id: string }) => {
  const [blog, setBlog] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogByCategory(id, 4)
      .then((data) => setBlog(data))
      .catch((err) => console.log("err", err))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (blog.length)
    return (
      <>
        <div className="lifeStyleTitleDiv">
          <label className="lifeStyleTitle">Lifestyle</label>
          <span className="lifeStyleViewAllButton">View All</span>
        </div>
        <div className="lifeStyleCardDiv">
          {blog.map((blog, idx) => (
            <>
              <div key={idx} className="lifeStyleCard">
                <div className="homeBlogTypeSmall">
                  <div className="thumbnail">
                    <img
                      src={imageUrlCheck(blog.images[0] as string)}
                      className="blogCardBackground"
                      alt="Basobaas Nepal"
                    />
                  </div>
                  <div className="cardContent">
                    <div className="blogCategoryTag">
                      <p>{blog.category?.name}</p>
                    </div>
                    <div className="blogTitle">
                      <p>{blog.title}</p>
                    </div>
                    <div className="blogBy">
                      <div className="author">{blog.author?.fullName}</div>
                      <div className="separator">
                        <Icon
                          icon="ci:dot-05-xl"
                          width="15"
                          height="15"
                          color="#FFFFFF"
                        />
                      </div>
                      <div className="posted">
                        {/* {createdAt} */}
                        {/* {blogPostedDate} */}
                        hi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div key={idx} className="lifeStyleCard">
                <div className="homeBlogTypeSmall">
                  <div className="thumbnail">
                    <img
                      src={imageUrlCheck(blog.images[0] as string)}
                      className="blogCardBackground"
                      alt="Basobaas Nepal"
                    />
                  </div>
                  <div className="cardContent">
                    <div className="blogCategoryTag">
                      <p>{blog.category?.name}</p>
                    </div>
                    <div className="blogTitle">
                      <p>{blog.title}</p>
                    </div>
                    <div className="blogBy">
                      <div className="author">{blog.author?.fullName}</div>
                      <div className="separator">
                        <Icon
                          icon="ci:dot-05-xl"
                          width="15"
                          height="15"
                          color="#FFFFFF"
                        />
                      </div>
                      <div className="posted">
                        {/* {createdAt} */}
                        {/* {blogPostedDate} */}
                        hi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div key={idx} className="lifeStyleCard">
                <div className="homeBlogTypeSmall">
                  <div className="thumbnail">
                    <img
                      src={imageUrlCheck(blog.images[0] as string)}
                      className="blogCardBackground"
                      alt="Basobaas Nepal"
                    />
                  </div>
                  <div className="cardContent">
                    <div className="blogCategoryTag">
                      <p>{blog.category?.name}</p>
                    </div>
                    <div className="blogTitle">
                      <p>{blog.title}</p>
                    </div>
                    <div className="blogBy">
                      <div className="author">{blog.author?.fullName}</div>
                      <div className="separator">
                        <Icon
                          icon="ci:dot-05-xl"
                          width="15"
                          height="15"
                          color="#FFFFFF"
                        />
                      </div>
                      <div className="posted">
                        {/* {createdAt} */}
                        {/* {blogPostedDate} */}
                        hi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>



    );
  else return null;
};

export default LifeStyle;
