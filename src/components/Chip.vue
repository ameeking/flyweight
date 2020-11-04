<template>
  <component :is="type" class="chip" :href="href">
    <slot></slot>
    <button @click="onClose">x</button>
  </component>
</template>

<script>
export default {
  name: "Chip",
  props: {
    href: {
      type: String,
      required: false,
      default: null
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a';
      }

      return 'span';
    }
  }
};
</script>

<style>
.chip {
  font-size: 0.75rem;
  border: 1px solid gray;
  margin: 0.5rem 0.5rem 0.5rem 0;
  text-decoration: none;
  padding: 2px 5px;
}
</style>