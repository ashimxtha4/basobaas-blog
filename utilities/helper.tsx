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
export const priceFormatter = (labelValue: string | number) => {
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

export const dateFormatter = (timeAgo: string) => {
  return timeAgo
    .replaceAll("s", "")
    .replace("0", "०")
    .replace("1", "१")
    .replace("2", "२")
    .replace("3", "३")
    .replace("4", "४")
    .replace("5", "५")
    .replace("6", "६")
    .replace("7", "७")
    .replace("8", "८")
    .replace("9", "९")
    .replace("day", "दिन")
    .replace("hour", "घण्टा")
    .replace("week", "हप्ता")
    .replace("ago", "अघि");
};
