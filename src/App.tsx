import * as React from "react";
import { Config } from "sitebuilder.client";
import SitebuilderContext, { ProviderStore } from "./components/context";
import Node from "./components/Node";
import defaults from "./config";

interface OwnProps {
  config?: Config;
}
interface OwnState {
  defaultConfig: Config | null;
  path: string;
}

export default class extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    const config = new Config(props.config || defaults);
    this.state = {
      defaultConfig: config,
      path: ""
    };
  }
  public render() {
    const { defaultConfig } = this.state;
    if (!defaultConfig) return null;
    const store: ProviderStore = {
      state: this.state
    };
    const page = defaultConfig.root.findChild({
      type: "Page",
      attributes: { path: "/" }
    });
    if (!page) return;
    return (
      <SitebuilderContext.Provider value={store}>
        <Node node={page} />
      </SitebuilderContext.Provider>
    );
  }
}
