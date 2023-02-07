import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RecommendedCard from "../cards/RecommendedCard.vue";

describe("RecommendedCard", () => {
  it("renders properly", () => {
    const wrapper = mount(RecommendedCard, {
      props: {
        img: "https://picsum.photos/200/300",
        price: "$333",
        description: "lorem lorem",
      },
    });
    expect(wrapper.text()).toContain("$333");
  });
});
