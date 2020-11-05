<template>
  <component :is="element">
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
      <List v-if="item.children" :items="item.children"></List>
    </li>
  </component>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'unordered',
      validator: function (value) {
        return ['ordered', 'unordered'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    element() {
      if (this.type === 'ordered') {
        return 'ol';
      }

      return 'ul';
    }
  }
};
</script>

<style lang="scss" scoped>

</style>