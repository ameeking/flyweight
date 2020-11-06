<template>
  <div :class="computedClass">
    <img class="imagery__image" :src="srcImage" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: 'Imagery',
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    scale: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['16:9', '1:1', '4:3', '3:2'].indexOf(value) !== -1
      }
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function () {
    return {
      observer: null, 
      load: false 
    }
  },
  computed: {
    srcImage() {
      return this.load ? this.src : '';
    },
    computedClass() {
      if (!this.scale) {
        return `imagery`;
      }

      return `imagery imagery--${this.scale.replace(':', '-')}`
    }
  },
  mounted() {
    if (this.lazy) {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.load = true;
        }
      });

      this.observer.observe(this.$el);
    }
    else {
      this.load = true;
    }
  },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";

.imagery {
  position: relative;
  overflow: hidden;
  background-color: $clr-base-lt;
}

.imagery__image {
  height: auto;
  width: 100%;
}

.imagery--16-9 {
  padding-bottom: percentage(9/16);
}

.imagery--1-1 {
  padding-bottom: percentage(1/1);
}

.imagery--4-3 {
  padding-bottom: percentage(3/4);
}

.imagery--3-2 {
  padding-bottom: percentage(2/3);
}

.imagery--16-9,
.imagery--1-1,
.imagery--4-3,
.imagery--3-2 {
  .imagery__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
