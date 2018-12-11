const config: any = {
  root: {
    id: "root",
    type: "Root",
    attributes: {},
    parent: null,
    children: ["4256c964-6ea1-4fa2-9277-5b96ea5909da"]
  },
  "4256c964-6ea1-4fa2-9277-5b96ea5909da": {
    id: "4256c964-6ea1-4fa2-9277-5b96ea5909da",
    type: "Page",
    attributes: {
      path: "/",
      frontPage: true,
      title: "Default Page"
    },
    parent: "root",
    children: ["9b9348d5-0231-4ee3-b27e-2e6326a9f0fb"]
  },
  "9b9348d5-0231-4ee3-b27e-2e6326a9f0fb": {
    id: "9b9348d5-0231-4ee3-b27e-2e6326a9f0fb",
    type: "Section",
    attributes: {
      type: "row"
    },
    parent: "4256c964-6ea1-4fa2-9277-5b96ea5909da",
    children: ["3e25f2f6-1e4c-444c-8536-c45855962b63"]
  },
  "3e25f2f6-1e4c-444c-8536-c45855962b63": {
    id: "3e25f2f6-1e4c-444c-8536-c45855962b63",
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
    parent: "9b9348d5-0231-4ee3-b27e-2e6326a9f0fb",
    children: []
  }
};

export default config;
