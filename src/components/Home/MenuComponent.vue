<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const active = ref(0);

    function updateActive(val: number) {
      active.value = val;
    }
    return {
      updateActive,
      active,
      isActive: true,
      menus: [
        { id: 1, title: "Automobiles" },
        { id: 23, title: "Clothes and wear" },
        { id: 3, title: "Home interiors" },
        { id: 447, title: "Computer and tech" },
        { id: 53, title: "Tools, equipments" },
        { id: 8, title: "Sports and outdoor" },
        { id: 934, title: "Animal and pets" },
        { id: 15, title: "Machinery tools" },
        { id: 155, title: "More category" },
      ],
    };
  },
});
</script>

<template>
  <div class="container m-auto !mt-[20px]">
    <div
      class="border bg-white p-[20px] rounded-md flex items-start gap-[14px]"
    >
      <ul class="hidden sm:hidden md:block lg:block">
        <li
          v-for="(item, index) of menus"
          @click="updateActive(index)"
          :class="{ active: active === index }"
          :key="item.id"
          class="p-[10px] lg:w-[250px] md:w-[200px] cursor-pointer not-italic font-medium text-base leading-5 text-[#505050] tracking-wide"
        >
          {{ item.title }}
        </li>
      </ul>
      <n-carousel class="max-w-[665px] h-[360px]" show-arrow autoplay>
        <img class="carousel-img" src="../../assets/banner.jpg" />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <i-ic-twotone-keyboard-arrow-left></i-ic-twotone-keyboard-arrow-left>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <i-ic-twotone-keyboard-arrow-right></i-ic-twotone-keyboard-arrow-right>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
      <div class="hidden sm:block md:block lg:block">
        <div class="h-[150px] bg-[#E3F0FF] rounded-md py-[12px] px-[10px]">
          <div class="flex items-center gap-[8px]">
            <img
              width="44"
              height="44"
              src="../../assets/Avatar.png"
              alt="Avatar"
            />
            <div>
              <p
                class="not-italic font-normal text-base leading-5 text-gray-900"
              >
                Hi, user
              </p>
              <p
                class="not-italic font-normal text-base leading-5 text-gray-900"
              >
                let’s get stated
              </p>
            </div>
          </div>
          <button
            class="bg-[#0B75FF] py-[7px] w-full text-white shadow-lg shadow-blue-500/50 rounded-md mt-[10px]"
          >
            Join now
          </button>
          <button
            class="bg-[#fff] py-[7px] w-full text-[#0D6EFD] shadow-lg rounded-md mt-[5px]"
          >
            Log in
          </button>
        </div>
        <div class="w-full h-[95px] bg-[#F38332] rounded-md mt-[10px]">
          <p
            class="not-italic font-normal text-base leading-5 text-white pl-4 pt-4"
          >
            Get US $10 off with a new supplier
          </p>
        </div>
        <div class="w-full h-[95px] bg-[#55BDC4] rounded-md mt-[10px]">
          <p
            class="not-italic font-normal text-base leading-5 text-white pl-4 pt-4"
          >
            Send quotes with supplier preferences
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background: #e5f1ff;
  border-radius: 6px;
  color: #1c1c1c;
}
.carousel-img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(212, 212, 212, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
