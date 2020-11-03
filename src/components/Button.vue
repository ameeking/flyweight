<template>
  <button type="button" :class="computedClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: [
    'size'
  ],
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  },
  computed: {
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