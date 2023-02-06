<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps<{
  img: string;
  icon: string;
  title: string;
}>();
</script>

<template>
  <div
    class="relative w-[280px] bg-white border-[#E0E0E0] border-[1px] rounded-md cursor-pointer"
  >
    <n-image
      class="rounded-t-md"
      lazy
      preview-disabled
      :src="img"
      :intersection-observer-options="{
        root: '#image-scroll-container',
      }"
    >
      <template #placeholder>
        <div
          class="w-[280px] h-[110px] flex justify-center items-center bg-[#8882]"
        >
          Loading...
        </div>
      </template>
    </n-image>
    <div
      class="p-4 bg-[#D1E7FF] inline-block border-2 border-white rounded-full absolute top-[95px] right-[12px]"
    >
      <Icon :icon="icon" width="24" />
    </div>
    <div class="p-[20px]">
      <p
        class="w-[180px] not-italic font-medium text-base leading-5 text-gray-900"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>
