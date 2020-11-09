<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Grid"
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
}
</style>