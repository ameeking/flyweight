<template>
  <div :class="computedClasses" :style="{ backgroundImage: `url('${image}')` }">
    <div class="banner__overlay"></div>
    <div class="banner__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    image: {
      type: String,
      required: false,
      default: null
    },
  },
  computed: {
    computedClasses() {
      return [
        'banner',
        !this.image ? 'banner--no-image' : null
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../scss/variables.scss";

.banner {
  position: relative;
  padding-bottom: 33.33%;
  overflow: hidden;
  box-shadow: $shadow;
  background-size: cover;
  background-position: center;
}

.banner__overlay {
  filter: opacity(0.25);
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner--no-image {
  padding-bottom: 0;
  box-shadow: none;

  .banner__overlay {
    display: none;
  }

  .banner__content {
    position: relative;
  }
}
</style>