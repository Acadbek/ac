<script setup lang="ts">
defineProps<{
  img: string;
  productName: string;
  price: string;
}>();
</script>

<template>
  <div class="flex py-5 pl-4 bg-white gap-8 items-start border cursor-pointer">
    <div>
      <p class="not-italic mb-2 font-normal text-base leading-5 text-[#1C1C1C]">
        {{ productName }}
      </p>
      <p class="not-italic font-normal text-xs leading-4 text-gray-600">From</p>
      <p class="not-italic font-normal text-xs leading-4 text-gray-600">
        {{ price }}
      </p>
    </div>
    <div>
      <img class="w-[82px] h-[82px] object-cover" :src="img" alt="Product's photo" />
    </div>
  </div>
  <!--  BzLTKmqmFmnG1bijQJxNL2q5 -->
</template>
