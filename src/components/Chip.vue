<template>
  <component :is="element" :class="computedClass" :href="href">
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
        return 'a';
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
  font-size: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  background-color: $clr-base-dk;
  color: $clr-ntrl-min;
  border-radius: 4px;
}

.chip--primary {
  background-color: $clr-primary-dkr;
}

.chip--secondary {
  background-color: $clr-secondary-dkr;
}
</style>