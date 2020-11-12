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

@mixin button-reset {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

/**
  * Button component
  */
.button {
  @include button-reset;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: $clr-ntrl-min;
  background-color: $clr-base-dk;

  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &:hover {
    color: $clr-base-dk;
    border-color: currentColor;
    background-color: $clr-ntrl-min;
  }

  &::-moz-focus-inner {
    border: none;
  }

  &:focus {
    outline: none;
  }
}

.button--primary {
  background-color: $clr-primary-dkr;

  &:hover {
    color: $clr-primary-dkr;
  }
}

.button--secondary {
  background-color: $clr-secondary-dkr;

  &:hover {
    color: $clr-secondary-dkr;
  }
}
</style>