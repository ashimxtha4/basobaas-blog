import Image from "next/image";

const RelatedBlogs = ({blog}:{blog:any}) => {
  return (
    <>
      <div className="relatedBlogs">
        <div className="imageContainer">
          <Image
            src={`${process.env.NEXT_PUBLIC_APP_IMG_URL as string}${
              blog?.id
            }/${blog?.images[0]}`}
            fill
            alt="Picture of the author"
            className="relatedBlogImages"
          />
        </div>
        <div className="contentContainer">
          <div className="categoryTitle">
            <p>{blog?.tags}</p>
          </div>
          <div className="blogHeader">
            <p>{blog?.title_np}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedBlogs;
