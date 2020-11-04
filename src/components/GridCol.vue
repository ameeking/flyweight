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

<style>
.grid-col {
  display: flex;
}
</style>