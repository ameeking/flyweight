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

  /* create a small space when buttons wrap on 2 lines */
  margin: 2px 0;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* button size comes from text + padding, avoid height */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: $clr-ntrl-min;
  background-color: $clr-base-dk;

  /* old-school "down" effect on clic + color tweak */
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  /* inverse colors on hover */
  &:hover {
    color: $clr-base-dk;
    border-color: currentColor;
    background-color: $clr-ntrl-min;
  }

  /* Firefox: remove the inner border shown on focus */
  &::-moz-focus-inner {
    border: none;
  }

  /* make sure we have a visible focus ring */
  &:focus {
    outline: none;
    // box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5),
    //   0 0 0 1.5px rgba(255, 105, 180, 0.5);
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