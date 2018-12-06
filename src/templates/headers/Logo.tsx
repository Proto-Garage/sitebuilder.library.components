import * as React from "react";
import Image from "../../../../../assets/images/logo1.png";

interface IProps {}

const Logo: React.SFC<IProps> = props => {
  return (
    <div className="p-2 mr-auto">
      <img src={Image} alt="" />
    </div>
  );
};

export default Logo;