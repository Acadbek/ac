<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <header-component />
    <Icon icon="mdi:user" />
    <row-card
      img="https://picsum.photos/210/210"
      name="Canon Cmera EOS 2000, Black 10x zoom"
      price="$998.00"
      salePrice="$1128.00"
      orderCount="154 orders"
      isFree="Free Shipping"
    />
  </header>

  <RouterView />
</template>
