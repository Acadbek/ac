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
        { id: 2, title: "Clothes and wear" },
        { id: 3, title: "Home interiors" },
        { id: 4, title: "Computer and tech" },
        { id: 5, title: "Tools, equipments" },
        { id: 8, title: "Sports and outdoor" },
        { id: 9, title: "Animal and pets" },
        { id: 15, title: "Machinery tools" },
        { id: 155, title: "More category" },
      ],
    };
  },
});
</script>

<template>
  <div class="container !mt-[20px]">
    <div class="border bg-white p-[20px] rounded-md">
      <ul>
        <li
          v-for="(item, index) of menus"
          @click="updateActive(index)"
          :class="{ active: active === index }"
          :key="item.id"
          class="p-[10px] cursor-pointer not-italic font-medium text-base leading-5 text-gray-900 tracking-wide"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.active {
  background: #e5f1ff;
  border-radius: 6px;
}
</style>
