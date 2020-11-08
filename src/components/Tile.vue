<template>
  <div :class="computedClass">
    <div class="tile__image" :style="{'background-image': 'url(' + image + ')'}">
      <div class="tile__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    image: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    element() {
      if (this.href) {
        return 'a';
      }

      return 'button';
    },
    computedClass() {
      if (!this.type) {
        return `tile`;
      }

      return `tile tile--horizontal-${this.type}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.tile {
  display: flex;
  flex-direction: column;
  background-color: $clr-ntrl-min;
  box-shadow: $shadow;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}

.tile__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: gray;
  background-blend-mode: multiply;
  padding-bottom: percentage(1/1);
  position: relative;
}

.tile__content {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-family: $ff-strong;
  font-size: 1.5rem;
  padding: 1rem;
}
</style>
