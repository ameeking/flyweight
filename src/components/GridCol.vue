<template>
  <div class="grid-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridCol"
};
</script>

<style lang="scss" scoped>
.grid-col {
  display: flex;
}
</style>