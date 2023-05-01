<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";
import { now } from "./helpers/getDate";

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
      <menu-component />
    </header>
    <main>
      <intro-time-component />
    </main>

    <RouterView />
  </n-config-provider>
</template>
