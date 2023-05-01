<script setup lang="ts">
import data from "@/data/into-datas.js";
import removeBackground from "@/helpers/removeBg";
defineProps<{
  img: string;
}>();
</script>

<template>
  <div>
    <h1>into</h1>
    <img :src="img" alt="" />
    <card-top
      v-for="card in data"
      :img="card.img"
      :key="card.id"
      :productName="card.name"
      :price="card.discount"
    />
  </div>
</template>
