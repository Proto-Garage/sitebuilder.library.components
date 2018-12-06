import * as React from "react";
import { Config } from "sitebuilder.client";
import SitebuilderContext, { ProviderStore } from "./context";
import App from "./App";

export interface OwnProps {}
export interface OwnState {}

export default class extends React.Component<OwnProps, OwnState> {
  state = {
    config: null,
    path: ""
  };
  componentDidMount() {
    const config = new Config({});
    this.setState({ config });
  }
  public render() {
    if (!this.state.config) return null;
    const store: ProviderStore = {
      state: this.state
    };
    return (
      <SitebuilderContext.Provider value={store}>
        <App />
      </SitebuilderContext.Provider>
    );
  }
}
