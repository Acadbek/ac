<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: "white",
    primaryColor: "#0B75FF",
    primaryColorHover: "#0B75FF",
    primaryColorPressed: "#fff",
    borderColor: "#0B75FF",
    cardColor: "red",
  },
  Button: {
    textColor: "#0B75FF",
    colorFocus: "#fff",
    colorHoverPrimary: "#fff",
    colorHover: "#0B75FF",
    color: "#0B75FF",
  },
  Input: {
    // textColor: "#333",
    // borderHover: "#0B75FF",
    // border: "#333",
  },
  Dropdown: {},
  Select: {
    peers: {
      InternalSelection: {
        textColor: "#000",
      },
    },
  },
};
// ...
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <header>
      <navbar-component />
      <recommended-card
        description="T-shirts with multiple colors, for men"
        price="$10.30"
        img="https://picsum.photos/200/300"
      />
      <service-card
        title="Source from Industry Hubs"
        img="https://picsum.photos/280/110"
        icon="ic:baseline-search"
      />
    </header>

    <RouterView />
  </n-config-provider>
</template>
