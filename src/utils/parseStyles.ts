import { Styles } from "sitebuilder.client";

export default (styles: any): Styles | null => {
  if (!styles) return null;
  let output = {};
  Object.entries(styles).map((item: any) => {
    const key = item[0];
    let value = item[1];
    if (item[0] === "backgroundImage") {
      value = `url(${value})`;
    }
    output = {
      ...output,
      [key]: value
    };
    // output += `${item[0]}: ${value}\n`;
  });
  return output;
};
