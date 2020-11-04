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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
</style>