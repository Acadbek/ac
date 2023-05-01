<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      value: ref(null),
      options: [
        {
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: "song0",
        },
        {
          label: "Drive My Car",
          value: "song1",
        },
      ],
    };
  },
});
</script>
<template>
  <div class="bg-white px-[20px] sm:py-[20px] md:py-[20px] lg:py-[20px] pt-[10px] pb-[16px] border-b">
    <div class="container">
      <div class="flex md:justify-between lg:justify-between sm:justify-between justify-between items-center">
        <div class="flex items-center">
          <i-quill-hamburger class="cursor-pointer mr-[20px] lg:hidden md:hidden sm:hidden block" width="100"
            height="45"></i-quill-hamburger>

          <img class="cursor-pointer" src="@/assets/logo.svg" alt="LOGO" />
          <div class="flex gap-4 w-full">
            <n-input class="!w-full hidden sm:flex md:flex lg:flex" type="text" placeholder="Search" />
            <n-select class="w-[250px] max-w-[250px] border-none hidden sm:hidden md:hidden lg:block"
              v-model:value="value" :options="options" />
            <n-button class="hidden sm:hidden md:hidden lg:flex">
              Search
            </n-button>
          </div>
        </div>
        <div class="flex gap-[25px]">
          <div class="flex flex-col items-center gap-[5px] gap-[5px]">
            <i-mdi-user width="24" height="24" class="text-[#8B96A5]"></i-mdi-user>
            <p class="text-xs lg:block md:block sm:hidden hidden leading-4 flex items-center text-center text-[#8B96A5]">
              Profile
            </p>
          </div>
          <div class="hidden sm:hidden md:flex lg:flex flex-col items-center gap-[5px]">
            <i-mdi-message-badge-outline width="24" height="24" class="text-[#8B96A5]"></i-mdi-message-badge-outline>
            <p class="text-xs leading-4 flex items-center text-center text-[#8B96A5]">
              Message
            </p>
          </div>
          <div class="hidden sm:hidden md:flex lg:flex flex-col items-center gap-[5px]">
            <i-mdi-cards-heart width="24" height="24" class="text-[#8B96A5]"></i-mdi-cards-heart>
            <p class="text-xs leading-4 flex items-center text-center text-[#8B96A5]">
              Orders
            </p>
          </div>
          <div class="flex flex-col items-center gap-[5px]">
            <i-material-symbols-shopping-cart width="24" height="24"
              class="text-[#8B96A5]"></i-material-symbols-shopping-cart>
            <p class="text-xs lg:block md:block sm:hidden hidden leading-4 flex items-center text-center text-[#8B96A5]">
              My cart
            </p>
          </div>
        </div>
      </div>
      <n-input class="!w-full lg:hidden md:hidden sm:hidden !border-red-500 flex mt-[10px] bg-[#F7FAFC]" type="text"
        placeholder="Search" />
    </div>
  </div>
  <nav class="border-b bg-white lg:flex md:flex sm:hidden hidden py-[22px]">
    <div class="container flex items-center gap-2">
      <i-quill-hamburger width="55" heigth="55" class="cursor-pointer"></i-quill-hamburger>
      <ul class="flex items-center gap-[25px]">
        <li class="not-italic font-medium text-base leading-5 text-[#1C1C1C] cursor-pointer">
          All category
        </li>
        <li class="not-italic font-medium text-base leading-5 text-[#1C1C1C] cursor-pointer">
          Hot offers
        </li>
        <li class="not-italic font-medium text-base leading-5 text-[#1C1C1C] cursor-pointer">
          Gift boxes
        </li>
        <li class="not-italic font-medium text-base leading-5 text-[#1C1C1C] cursor-pointer">
          Projects
        </li>
        <li class="not-italic font-medium text-base leading-5 text-[#1C1C1C] cursor-pointer">
          Projects
        </li>
        <li>Help</li>
      </ul>
    </div>
  </nav>
</template>
