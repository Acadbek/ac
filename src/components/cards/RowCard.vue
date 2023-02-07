<script setup lang="ts">
import StarRating from "vue-star-rating";

defineProps<{
  img: string;
  name: string;
  price: string;
  description: string;
  salePrice: string;
  orderCount: string;
  isFree: string;
}>();
</script>

<template>
  <div
    class="relative flex border-[#E0E0E0] border-[1px] items-start bg-white gap-[24px]"
  >
    <n-image
      class="p-[8px]"
      width="210"
      height="210"
      lazy
      :src="img"
      :intersection-observer-options="{
        root: '#image-scroll-container',
      }"
    >
      <template #placeholder>
        <div
          style="
            width: 210px;
            height: 210px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #8882;
          "
        >
          Loading
        </div>
      </template>
    </n-image>
    <div class="py-[24px]">
      <h3 class="not-italic font-medium text-base leading-5 text-gray-900">
        {{ name }}
      </h3>
      <div class="flex items-center mt-[14px] gap-2 mb-[8px]">
        <span class="not-italic font-semibold text-xl leading-7 text-gray-900">
          {{ price }}
        </span>
        <span
          class="not-italic font-semibold text-base leading-5 text-gray-600 line-through"
          >{{ salePrice }}</span
        >
      </div>
      <div class="flex items-center gap-[12px] mb-[12px]">
        <star-rating star-size="20" />
        <div class="w-[7px] rounded-full h-[7px] bg-[#DEE2E7]"></div>
        <span
          class="not-italic font-normal text-base leading-5 text-gray-600"
          >{{ orderCount }}</span
        >
        <div class="w-[7px] rounded-full h-[7px] bg-[#DEE2E7]"></div>
        <span class="font-normal text-base leading-5 text-[#00B517]">{{
          isFree
        }}</span>
      </div>
      <p class="not-italic font-normal text-base leading-6 text-[#505050]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button
        class="mt-[24px] not-italic font-medium text-base leading-5 text-[#0D6EFD]"
      >
        View details
      </button>
    </div>
    <button
      class="bg-white absolute right-[20px] top-[20px] w-[40px] h-[40px] p-[8px] rounded-md drop-shadow-sm border-[#DEE2E7] border-[1px]"
    >
      icon
    </button>
  </div>
</template>
