import * as React from "react";
import Image1 from "./assets/translate1.png";
import Image2 from "./assets/translate2.png";
import Image3 from "./assets/translate3.png";

interface IProps {}

const LanguageBar: React.SFC<IProps> = props => {
  return (
    <div className="d-flex align-items-center">
      <ul className="d-flex m-0">
        <li className="list-inline-item">
          <img src={Image1} alt="" />
        </li>
        <li className="list-inline-item">
          <img src={Image2} alt="" />
        </li>
        <li className="list-inline-item">
          <img src={Image3} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default LanguageBar;
