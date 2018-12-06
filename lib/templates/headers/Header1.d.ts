import * as React from "react";
import { Styles } from "sitebuilder.client";
export interface IProps {
    styles: Styles | null;
    navStyles: Styles | null;
    topStyles: Styles | null;
}
declare const Header1: React.SFC<IProps>;
export default Header1;
