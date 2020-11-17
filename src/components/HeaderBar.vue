<template>
  <div class="header-bar">
    <a class="header-bar__logo" href="/">
      <slot name="logo"></slot>
    </a>
    <Navigation :items="menuItems" />
    <div class="header-bar__utilities">
      <slot name="utilities"></slot>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: "HeaderBar",
  components: {
    'Navigation': Navigation,
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    },
  }
}
</script>

<style lang="scss">
.header-bar {
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  justify-content: space-between;
  border-bottom: 1px solid gray;
}
</style>