<template>
  <div :class="computedClass">
    <div class="card__image" :style="{'background-image': 'url(' + image + ')'}"></div>
    <div class="card__content">
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
  // box-shadow: $shadow;
  // padding: 1rem;
  // width: 100%;
  border-radius: 4px;
  // overflow: hidden;
}

.card--horizontal-left {
  flex-direction: row;

  .card__image {
    flex: 1;
    height: auto;
    width: 110px;
    height: 110px;
    padding-bottom: 0;
  }

  .card__content {
    padding: 0;
    margin-left: 1rem;
  }
}

.card--horizontal-right {
  flex-direction: row-reverse;

  .card__image {
    flex: 1;
    height: auto;
    width: 110px;
    height: 110px;
    padding-bottom: 0;
  }

  .card__content {
    padding: 0;
    margin-right: 1rem;
  }
}

.card__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: percentage(9/16);
  border-radius: 4px;
  box-shadow: $shadow;
}

.card__content {
  padding: 1rem 0;
  flex: 3;
}

.card__header {
  font-size: 1.25rem;
  font-family: $ff-strong;
  margin-bottom: 0.5rem;
}
</style>
