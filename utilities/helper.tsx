import { IMG_URL } from "../baseConstants";

//FUNCTION TO CHANGE OR ADD IMAGE URL
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

//FUNCTION FOR FIXED PRICE SCALING
export const toFixed = (price: number, scale: number = 3) => {
  var p = price.toString().indexOf(".");
  return price.toString().substring(0, p + scale);
};

//FUNCTION FOR PRICE FORMATTER
export const Priceformatter = (labelValue: string | number) => {
  let dc = Number(labelValue) / 1.0e5;
  // Six Zeroes for Corer
  return Number(labelValue) >= 1.0e6
    ? toFixed(Number(labelValue) / 1.0e6) + " Crore"
    : Number(labelValue) >= 1.0e5
    ? // Five Zeroes for Lakh
      toFixed(Number(labelValue) / 1.0e5) + " Lakh"
    : // Three Zeroes for Thousands
      Number(labelValue) >= 1.0e3 &&
      // ? toFixed(Number(labelValue) / 1.0e3) + ' '
      Number(labelValue);
};
