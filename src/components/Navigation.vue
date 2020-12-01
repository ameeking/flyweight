<template>
  <nav :class="computedClasses">
    <ul class="navigation__items">
      <li class="navigation__item" v-for="item in items" :key="item.id">
        <router-link :to="item.path" class="navigation__link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    items: {
      type: Array,
      required: true
    },
    inverse: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  computed: {
    computedClasses() {
      return [
        'navigation',
        this.inverse ? 'navigation--inverse' : null
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.navigation__items {
  margin: 0;
  padding: 0;
}

.navigation__item {
  display: inline;
  padding: 0 2rem;
}

.navigation__link {
  color: $clr-base;
  font-weight: bold;
  padding-bottom: 0.25rem;

  &:hover {
    text-decoration: none;
    border-bottom: 2px solid $clr-primary-dk;
  }
}

.navigation--inverse {
  .navigation__link {
    color: $clr-ntrl-min;

    &:hover {
      border-bottom-color: $clr-ntrl-min;
    }
  }
}
</style>