<template>
  <component :is="element" :class="computedClass" :href="href">
    <div class="card__image">
      <Imagery :src="image" :scale="scale"></Imagery>
    </div>
    <div class="card__content">
      <slot name="content"></slot>
    </div>
  </component>
</template>

<script>
import Imagery from './Imagery';

export default {
  name: "Card",
  components: {
    'Imagery': Imagery,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      },
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    image: {
      type: String,
      required: false,
      default: null
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    scale: {
      type: String,
      required: false,
      default: '1:1',
      validator: function (value) {
        return ['16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'].indexOf(value) !== -1
      }
    },
  },
  computed: {
    element() {
      if (this.href) {
        return 'a';
      }

      return 'div';
    },
    computedClass() {
      return [
        'card',
        this.type ? `card--horizontal-${this.type}` : null,
        this.border ? 'card--bordered' : null
      ]
    },
    computedImageRatio() {
      if (!this.scale) {
        return `imagery`;
      }

      return `imagery imagery--${this.scale.replace(':', '-')}`
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
  text-decoration: none;
  color: initial;
  border-radius: 4px;
  width: 100%;
}

.card__image {
  flex: 1;
  border-radius: 4px;
  box-shadow: $shadow;
  overflow: hidden;
}

.card__content {
  padding: 2rem 0;
  flex: 3;
}

.card__header {
  font-size: 2.5rem;
  font-family: $ff-strong;
  margin-bottom: 1rem;
}

.card--horizontal-left {
  flex-direction: row;

  .card__content {
    padding: 0 0 0 2rem;
  }
}

.card--horizontal-right {
  flex-direction: row-reverse;

  .card__content {
    padding: 0 2rem 0 0;
  }
}

.card--bordered {
  box-shadow: $shadow;
  border-radius: 0.5rem;
  overflow: hidden;

  .card__image {
    border-radius: 0;
    box-shadow: none;
    overflow: initial;
  }

  .card__content {
    padding: 2rem;
  }
}
</style>
