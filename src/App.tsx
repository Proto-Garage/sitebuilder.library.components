import * as React from "react";
import { Config } from "sitebuilder.client";
import SitebuilderContext, { ProviderStore } from "./components/context";

interface OwnProps {}
interface OwnState {
  config: Config | null;
  path: string;
}

export default class extends React.Component<OwnProps, OwnState> {
  state: OwnState = {
    config: null,
    path: ""
  };
  componentDidMount() {
    const config = new Config({
      root: {
        id: "root",
        type: "Root",
        attributes: {},
        children: ["35b6a1c7-343b-4677-94fb-62a6bdb11d5a"]
      },
      "35b6a1c7-343b-4677-94fb-62a6bdb11d5a": {
        id: "35b6a1c7-343b-4677-94fb-62a6bdb11d5a",
        type: "Page",
        attributes: {
          path: "/",
          frontPage: true,
          title: "Default Page"
        },
        parent: "root",
        children: [
          "3a4a6805-2cad-41fa-8168-34eef3cb0290",
          "3d5da5ae-d9e8-406c-b805-633458d85ceb",
          "823bb07d-ea00-4077-9bdb-537e2e74e9d8",
          "2aaeda9b-6d23-4a28-9bfe-282c65fead5e"
        ]
      },
      "3a4a6805-2cad-41fa-8168-34eef3cb0290": {
        id: "3a4a6805-2cad-41fa-8168-34eef3cb0290",
        type: "Header",
        attributes: {
          template: 1,
          styles: {
            backgroundImage: "",
            backgroundColor: "#64c443",
            color: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: ""
          },
          navStyles: {
            backgroundImage: "",
            backgroundColor: "",
            color: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: ""
          },
          topStyles: {
            backgroundImage: "",
            backgroundColor: "",
            color: "",
            marginTop: "",
            marginBottom: "",
            marginLeft: "",
            marginRight: "",
            paddingTop: "",
            paddingBottom: "",
            paddingLeft: "",
            paddingRight: ""
          }
        },
        parent: "35b6a1c7-343b-4677-94fb-62a6bdb11d5a",
        children: []
      },
      "3d5da5ae-d9e8-406c-b805-633458d85ceb": {
        id: "3d5da5ae-d9e8-406c-b805-633458d85ceb",
        type: "Footer",
        attributes: {
          template: 1,
          styles: {},
          navStyles: {}
        },
        parent: "35b6a1c7-343b-4677-94fb-62a6bdb11d5a",
        children: []
      },
      "823bb07d-ea00-4077-9bdb-537e2e74e9d8": {
        id: "823bb07d-ea00-4077-9bdb-537e2e74e9d8",
        type: "Section",
        attributes: {
          type: "row"
        },
        parent: "35b6a1c7-343b-4677-94fb-62a6bdb11d5a",
        children: [
          "6759a427-06be-4b06-9be3-d4c8d3d27dd8",
          "f9e4d424-1e4b-4169-8930-071da1ecdc73"
        ]
      },
      "6759a427-06be-4b06-9be3-d4c8d3d27dd8": {
        id: "6759a427-06be-4b06-9be3-d4c8d3d27dd8",
        type: "Heading",
        attributes: {
          tag: "h1",
          text: "運巻主意朝縛属滋情空駒門国程期備"
        },
        parent: "823bb07d-ea00-4077-9bdb-537e2e74e9d8",
        children: []
      },
      "f9e4d424-1e4b-4169-8930-071da1ecdc73": {
        id: "f9e4d424-1e4b-4169-8930-071da1ecdc73",
        type: "Text",
        attributes: {
          text:
            "真年専月注海先動渡適文備独。情害暮著有誕聖本中年琴平容変覧福告楽固就。現迎会減筒援手郎満方部全。統前万道獲覧属格玲時査中技。置撮位順日企新浜江田官株立火投。処行政参迷親年目能続経市平。表女及長原治禁墨料日排検一。放国毎価相年崎事都崎発宿渡話話際会医。渡理忙登多業推秘完載問面塗喫身。用聞企換半二男王供田生手質吹販大摂別。"
        },
        parent: "823bb07d-ea00-4077-9bdb-537e2e74e9d8",
        children: []
      },
      "2aaeda9b-6d23-4a28-9bfe-282c65fead5e": {
        id: "2aaeda9b-6d23-4a28-9bfe-282c65fead5e",
        type: "Section",
        attributes: {
          type: "row"
        },
        parent: "35b6a1c7-343b-4677-94fb-62a6bdb11d5a",
        children: ["e2d7c020-a1a1-4e0c-8950-008c342013fc"]
      },
      "e2d7c020-a1a1-4e0c-8950-008c342013fc": {
        id: "e2d7c020-a1a1-4e0c-8950-008c342013fc",
        type: "Carousel",
        attributes: {
          items: [
            {
              src:
                "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/banner_1.png",
              altText: "carousel image 1"
            },
            {
              src:
                "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410726/lottery_banner.png",
              altText: "carousel image 2"
            },
            {
              src:
                "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/slot_banner.png",
              altText: "carousel image 3"
            },
            {
              src:
                "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410729/live_banner.png",
              altText: "carousel image 4"
            },
            {
              src:
                "https://res.cloudinary.com/dmhahyfum/image/upload/v1543410730/sport_banner.png",
              altText: "carousel image 5"
            }
          ],
          options: {
            items: 4,
            loop: true,
            nav: false,
            rewind: false,
            autoplay: false
          }
        },
        parent: "2aaeda9b-6d23-4a28-9bfe-282c65fead5e",
        children: []
      }
    });
    this.setState({ config });
  }
  public render() {
    const { config } = this.state;
    if (!config) return null;
    const store: ProviderStore = {
      state: this.state
    };
    console.log(config.serialize());
    return (
      <SitebuilderContext.Provider value={store}>
        <div />
      </SitebuilderContext.Provider>
    );
  }
}
