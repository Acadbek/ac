<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "blue",
  },
  Button: {
    textColor: "#fff",
  },
};
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
