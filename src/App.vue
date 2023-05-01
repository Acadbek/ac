<template>
  <!-- <header>
    <navbar-component />
    <menu-component />
    </header>
    <main>
      <intro-time-component />
    </main>
     -->
  <RouterView v-slot="{ Component, route }">
    <n-config-provider :theme-overrides="themeOverrides">
      <component :is="getLayout(route)">
        <Suspense v-if="Component">
          <component :is="Component">
            <template #fallback>
              <div class="loading">Loading...</div>
            </template>
          </component>
        </Suspense>
      </component>
    </n-config-provider>
  </RouterView>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
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

const layouts = {
  default: defineAsyncComponent(() => import('./layouts/defaultComponent.vue')),
  empty: defineAsyncComponent(() => import('./layouts/empty.vue')),
};

const getLayout = (route: any) => {
  const layout = route.meta.layout;
  return layouts[layout] || layouts.default;
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px;
  transition: all 0.35s ease-in-out;
}
</style>
