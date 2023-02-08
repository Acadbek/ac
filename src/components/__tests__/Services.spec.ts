import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ServiceCard from "../cards/ServiceCard.vue";

describe("ServiceCard", () => {
  it("renders properly", () => {
    const wrapper = mount(ServiceCard, {
      props: {
        img: "https://picsum.photos/280/110",
        icon: "ic:baseline-search",
        title: "Source from Industry Hubs",
      },
    });
    expect(wrapper.text()).toContain("Source from Industry Hubsubs");
  });
});
