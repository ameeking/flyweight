<template>
  <component :is="element" :class="computedClass" :to="href">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Chip",
  props: {
    type: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    },
    href: {
      type: String,
      required: false,
      default: null
    },
  },
  computed: {
    element() {
      if (this.href) {
        return 'router-link';
      }

      return 'span';
    },
    computedClass() {
      if (!this.type) {
        return `chip`;
      } 

      return `chip chip--${this.type}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.chip {
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.25rem 0.4rem;
  background-color: $clr-ntrl-min;
  color: $clr-base-dk;
  border: 1px solid $clr-base-dk;
  border-radius: 4px;
  margin-right: 1rem;
}

.chip--primary {
  border-color: $clr-primary-dkr;
  color: $clr-primary-dkr;
}

.chip--secondary {
  border-color: $clr-secondary-dkr;
  color: $clr-secondary-dkr;
}
</style>