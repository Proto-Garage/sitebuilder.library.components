import * as React from "react";
// const Image = require("../assets/logo1.png");

interface IProps {}

const Logo: React.SFC<IProps> = props => {
  return (
    <div className="p-2">
      <img
        src="https://res.cloudinary.com/dmhahyfum/image/upload/v1544579841/logo1.png"
        alt=""
      />
    </div>
  );
};

export default Logo;
