import * as React from "react";
import SitebuilderContext from "./context";

export default class App extends React.Component<{}> {
  static contextType = SitebuilderContext;
  context!: React.ContextType<typeof SitebuilderContext>;
  render() {
    return <div>asdasd</div>;
  }
}
