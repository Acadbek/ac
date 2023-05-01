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
  <div class="relative border bg-white rounded-[4px]">
    <div>
      <n-image
        preview-disabled
        class="py-[15px] px-[32px] border-b"
        lazy
        :src="img"
        :intersection-observer-options="{
          root: '#image-scroll-container',
        }"
      >
        <template #placeholder>
          <div
            style="
              width: 230px;
              height: 230px;
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
    </div>
    <div class="p-[20px]">
      <div class="flex items-center gap-[8px] mb-[10px]">
        <p class="not-italic font-semibold text-lg leading-5 text-[#1C1C1C]">
          {{ price }}
        </p>
        <p
          class="line-through not-italic font-normal text-base leading-5 text-[#8B96A5]"
        >
          {{ salePrice }}
        </p>
      </div>
      <button
        class="bg-white absolute right-[20px] bottom-[85px] w-[40px] h-[40px] p-[8px] rounded-md drop-shadow-sm border-[#DEE2E7] border-[1px]"
      >
        icon
      </button>
      <star-rating star-size="20" class="mb-[10px]" />
      <p class="nnot-italic font-normal text-base leading-6 text-[#606060]">
        {{ name }}
      </p>
    </div>
  </div>
</template>
