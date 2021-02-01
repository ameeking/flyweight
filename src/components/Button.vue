<template>
  <component :is="element" :to="href" :class="computedClass" @click="onClick" :aria-pressed="pressed">
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
        return ['inverse', 'primary', 'secondary'].indexOf(value) !== -1
      }
    },
    pressed: {
      type: Boolean,
      required: false,
      default: null
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
        return 'router-link';
      }

      return 'button';
    },
    computedClass() {
      if (!this.type) {
        return `button`;
      } 

      return `button button--${this.type}`
    },
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

  &[aria-pressed="true"] {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }

  &::-moz-focus-inner {
    border: none;
  }

  &:focus {
    outline: none;
  }
}

.button--inverse {
  background-color: transparent;
  border-color: $clr-base-dk;
  color: $clr-base-dk;

  &:hover {
    color: $clr-ntrl-min;
    background-color: $clr-base-dk;
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