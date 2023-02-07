<script setup lang="ts"></script>

<template>
  <header>
    <navbar-component />
    <!-- <card-middle
      price="USD 19"
      productName="Soft chairs"
      img="https://picsum.photos/200/300"
    /> -->
    <!-- <card-top img="https://picsum.photos/200/300" /> -->
    <recommended-card
      description="T-shirts with multiple colors, for men"
      price="$10.30"
      img="https://picsum.photos/200/300"
    />
    <!-- <row-card img="https://picsum.photos/200/300" /> -->
    <!-- <service-card
      title="Source from Industry Hubs"
      img="https://picsum.photos/280/110"
      icon="ic:baseline-search"
    /> -->
  </header>

  <RouterView />
</template>
