<script setup lang="ts">
defineProps<{
  img: string;
  price: string;
  description: string;
}>();
</script>

<template>
  <div
    class="p-2 cursor-pointer flex justify-center w-[220px] h-[310px] items-start flex-col border-[#E0E0E0] px-[10px] bg-white border-[1px] rounded-[4px]"
  >
    <img class="w-[200px] h-[200px] object-cover mb-[14px]" :src="img" alt="Img" />
    <p class="not-italic font-medium text-base leading-5 text-[#1C1C1C]">
      {{ price }}
    </p>
    <p class="not-italic mt-[4px] font-normal text-base leading-6 text-[#8B96A5]">
      {{ description }}
    </p>
  </div>
</template>
