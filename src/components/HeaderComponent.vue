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
  <div class="bg-white py-[20px] border-b">
    <div class="container">
      <div class="flex items-center">
        <div>
          <img class="cursor-pointer" src="@/assets/logo.svg" alt="LOGO" />
        </div>
        <div class="flex gap-4">
          <n-input
            class="!w-[450px]"
            v-model:value="label"
            type="text"
            placeholder="Search"
          />
          <n-select
            class="border-none w-[205px] open:!bg-slate-900"
            v-model:value="value"
            :options="options"
          />
          <n-button class="bg-[#18a058]" type="primary"> Search </n-button>
        </div>
        <div>
          <Icon icon="mdi:user" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
