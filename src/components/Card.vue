<template>
  <component :is="element" :class="computedClass" :to="href">
    <div class="card__image">
      <Imagery :src="image.src" :srcset="image.srcset" :alt="image.alt" :scale="scale"></Imagery>
      <div class="card__image-content">
        <slot name="image"></slot>
      </div>
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
      type: Object,
      required: false,
      default: function() {
        return {};
      }
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
        return 'router-link';
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
  text-decoration: none;
  color: initial;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

.card__image {
  flex: 1;
  border-radius: 4px;
  box-shadow: $shadow;
  overflow: hidden;
  position: relative;
}

.card__image-content {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.card__content {
  display: flex;
  flex-direction: column;
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
  max-width: none;

  .card__content {
    padding: 0 0 0 2rem;
  }
}

.card--horizontal-right {
  flex-direction: row-reverse;
  max-width: none;

  .card__content {
    padding: 0 2rem 0 0;
  }
}

.card--bordered {
  box-shadow: $shadow;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: $clr-ntrl-min;

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
