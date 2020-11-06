<template>
  <div :class="computedClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridCol",
  props: {
    xs: {
      type: String,
      required: false,
      default: null
    },
    sm: {
      type: String,
      required: false,
      default: null
    },
    md: {
      type: String,
      required: false,
      default: null
    },
    lg: {
      type: String,
      required: false,
      default: null
    },
    xl: {
      type: String,
      required: false,
      default: null
    },
  },
  computed: {
    computedClasses() {
      let classes = 'grid-col';

      if (this.xs) {
        classes += ` grid-col--xs-${this.xs}`;
      }

      if (this.sm) {
        classes += ` grid-col--sm-${this.sm}`;
      }

      if (this.md) {
        classes += ` grid-col--md-${this.md}`;
      }

      if (this.lg) {
        classes += ` grid-col--lg-${this.lg}`;
      }

      if (this.xl) {
        classes += ` grid-col--xl-${this.xl}`;
      }

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.grid-col {
  display: flex;
}

$mediaQueries: (
  "xs": $mq-xs-min,
  "sm": $mq-sm-min,
  "md": $mq-md-min,
  "lg": $mq-lg-min,
  "xl": $mq-xl-min,
);

@each $mq, $width in $mediaQueries {
  @media (min-width: $width) {
    @for $i from 1 through 12 {
      .grid-col--#{$mq}-#{$i} {
        grid-column: span $i;
      }
    }
  }
}
</style>