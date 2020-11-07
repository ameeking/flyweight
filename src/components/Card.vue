<template>
  <div :class="computedClass" href="/">
    <div class="card__image" :style="{'background-image': 'url(' + image + ')'}"></div>
    <div class="card__content">
      <div class="card__header">
        <slot name="header"></slot>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    type: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
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
        return `card`;
      }

      return `card card--horizontal-${this.type}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.card {
  display: flex;
  flex-direction: column;
  background-color: $clr-ntrl-min;
  box-shadow: $shadow;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
}

.card--horizontal-left {
  flex-direction: row;

  .card__image {
    flex: 1;
    height: auto;
    padding-bottom: 0;
  }
}

.card--horizontal-right {
  flex-direction: row-reverse;

  .card__image {
    flex: 1;
    height: auto;
    padding-bottom: 0;
  }
}

.card__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: percentage(9/16);
}

.card__content {
  padding: 1rem;
  flex: 3;
}

.card__header {
  font-size: 1.25rem;
  font-family: $ff-strong;
  margin-bottom: 0.5rem;
}
</style>
