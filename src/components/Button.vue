<template>
  <component :is="type" :href="href" :class="computedClass" @click="onClick">
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
    size: {
      type: String,
      required: false,
      default: 'small'
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a';
      }

      return 'button';
    },
    computedClass() {
      if (!this.size) {
        return `button`;
      } 

      return `button button--${this.size}`
    }
  }
};
</script>

<style>
.button--small {
  padding: 1px;
}

.button--medium {
  padding: 5px;
}

.button--large {
  padding: 10px;
}
</style>