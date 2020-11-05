<template>
  <component :is="element" :href="href" :class="computedClass" @click="onClick">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      required: false,
      default: null
    },
    type: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
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
        return `button`;
      } 

      return `button button--${this.type}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.button {
  padding: 1px;
}

.button--primary {
  border-color: $clr-primary;
  background-color: $clr-primary-lt;
}

.button--secondary {
  border-color: $clr-secondary;
  background-color: $clr-secondary-lt;
}
</style>