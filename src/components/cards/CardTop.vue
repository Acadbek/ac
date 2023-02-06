<script setup lang="ts">
defineProps<{
  img: string;
  productName: string;
  price: string;
}>();
</script>

<template>
  <div
    class="px-5 border bg-white flex justify-center cursor-pointer items-center flex-col pt-2 pb-5"
  >
    <img
      class="w-[140px] mb-[11px] h-[140px] object-cover"
      :src="img"
      alt="IMG"
    />
    <p
      class="not-italic font-normal mb-2 text-base leading-6 text-center text-gray-900"
    >
      {{ productName }}
    </p>
    <p
      class="w-16 h-6 bg-[#FFE3E3] items-center-pink-200 rounded-[28px] items-center text-center text-red-700"
    >
      {{ price }}
    </p>
  </div>
</template>
