import { IMG_URL } from "../baseConstants";

//FUNCTION TO CHANGE IMAGE URL
export function imageUrlCheck(imgUrl: string) {
  let urlCheck = imgUrl.indexOf("undefined") >= 0;
  if (urlCheck) {
    let url = imgUrl.replace(
      "undefined",
      IMG_URL ?? "https://basobaasnew.asterdio.xyz"
    );
    return url;
  }
  return imgUrl;
}
