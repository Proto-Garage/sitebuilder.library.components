export default (styles: any) => {
  if (!styles) return "";
  let output = "";
  Object.entries(styles).map(item => {
    output += `${item[0]}: ${item[1]}\n`;
  });
  return output;
};
