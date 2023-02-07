<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <header-component />
    <Icon icon="mdi:user" />
    <filter-card
      img="https://picsum.photos/230/230"
      name="GoPro HERO6 4K Action Camera - Black"
      price="$99.50"
      salePrice="$1128.00"
    />
  </header>

  <RouterView />
</template>
