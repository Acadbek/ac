<script setup lang="ts">
defineProps<{ icon: string }>();
</script>

<template>
  <Icon :icon="icon" width="24" />
</template>
