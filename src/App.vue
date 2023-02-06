<script setup lang="ts">
// import { Icon } from "@iconify/vue";
</script>

<template>
  <header>
    <!-- <Icon icon="mdi-light:home" /> -->
    <!-- <card-top
      img="https://picsum.photos/200/300"
      productName="Smart watches"
      price="-25%"
    /> -->
    <!-- <card-middle
      img="https://w7.pngwing.com/pngs/249/759/png-transparent-chair-comfort-furniture-commode-comfortable-chairs-angle-furniture-fashion-thumbnail.png"
      productName="Soft chairs"
      price="USD 190"
    /> -->
    <!-- <recommended-card
      img="https://i.pinimg.com/originals/b8/0d/10/b80d10138490459847795be21e63d154.png"
      price="$10.30"
      description="T-shirts with multiple colors, for men"
    /> -->
    <service-card
      img="https://picsum.photos/280/120"
      icon="material-symbols:search"
      title="Source from Industry Hubs"
    />
  </header>

  <RouterView />
</template>
