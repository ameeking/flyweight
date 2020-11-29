<template>
  <div :class="computedClass">
    <a class="header-bar__logo" href="/">
      <slot name="logo"></slot>
    </a>
    <Navigation :items="menuItems" :inverse="inverse"/>
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
    inverse: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    computedClass() {
      return [
        'header-bar',
        this.inverse ? 'header-bar--inverse' : null
      ]
    }
  },
}
</script>

<style lang="scss">
@import "../scss/variables.scss";

.header-bar {
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  justify-content: space-between;
  border-bottom: 1px solid $clr-gray;
}

.header-bar--inverse {
  border-bottom: none;
}
</style>