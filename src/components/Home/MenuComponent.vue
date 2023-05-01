<script lang="ts">
import { uuid } from 'vue-uuid';
import { defineComponent, ref } from "vue";

interface Menu {
  id: any;
  title: string;
}

export default defineComponent({
  setup() {
    const active = ref<number>(0);

    function updateActive(val: number): void {
      active.value = val;
    }

    const menus: Menu[] = [
      { id: uuid, title: "Home interiors" },
      { id: uuid, title: "Computer and tech" },
      { id: uuid, title: "Tools, equipments" },
      { id: uuid, title: "Sports and outdoor" },
      { id: uuid, title: "Machinery tools" },
      { id: uuid, title: "More category" },
    ];

    const images: string[] = [
      'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
      'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
      'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
    ];

    return {
      menus,
      images,
      active,
      updateActive,
      isActive: true,
    };
  }
});
</script>


<template>
  <div class="container m-auto !mt-5">
    <div class="border p-5 rounded-md flex-start gap-3" >
      <ul class="hidden sm:hidden md:block lg:block">
        <li
          v-for="(item, index) of menus"
          @click="updateActive(index)"
          :class="{ active: active === index }"
          :key="item.id"
          class="p-[10px] lg:w-[250px] md:w-[200px] cursor-pointer font-medium text-base text-gray-50 tracking-wide">
          {{ item.title }}
        </li>
      </ul>
      <n-carousel class="max-w-[665px] h-[360px]" show-arrow autoplay>
        <img v-for="img in images" :key="img" class="carousel-img" :src=img />
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
          <div class="flex-center gap-2">
            <img
              width="44"
              height="44"
              src="../../assets/img/Avatar.png"
              alt="Avatar"
            />
            <div>
              <p class="text-base text-gray-900"> Hi, user </p>
              <p class="text-base text-gray-900"> let’s get stated </p>
            </div>
          </div>
          <button class="bg-blue-main py-2 w-full shadow-lg shadow-blue-500/50 rounded-md mt-2">
            Join now
          </button>
          <button class="bg-white py-2 w-full text-blue-main shadow-lg rounded-md mt-1">
            Log in
          </button>
        </div>
        <div class="w-full h-24 bg-[#F38332] rounded-md mt-2">
          <p class="text-base pl-4 pt-4">
            Get US $10 off with a new supplier
          </p>
        </div>
        <div class="w-full h-24 bg-blue-50 rounded-md mt-[10px]">
          <p class="text-base pl-4 pt-4">
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
