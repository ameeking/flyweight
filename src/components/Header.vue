<template>
  <header class="header">
    <div class="header__bar">
      <a class="header__logo" href="/">
        <slot name="logo"></slot>
      </a>
      <div class="header__navigation">
        <Navigation :items="menuItems" />
      </div>
      <div class="header__utilities">
        <slot name="utilities"></slot>
      </div>
    </div>
    <h1 class="l-container">{{ title }}</h1>
  </header>
</template>

<script>
// import Banner from './Banner';
import Navigation from './Navigation';

export default {
  name: "Header",
  components: {
    // 'Banner': Banner,
    'Navigation': Navigation,
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    image: {
      type: String,
      required: false,
      default: null
    },
  }
}
</script>

<style lang="scss">
.header__bar {
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
  border-bottom: 1px solid gray;
}

.header__title {
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 7rem;
}

.header__navigation {
  margin-left: auto;
  margin-right: auto;
}

.header__utilities {
  margin-left: auto;
}
</style>