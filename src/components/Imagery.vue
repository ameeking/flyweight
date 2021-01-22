<template>
  <div :class="computedClass">
    <img class="imagery__image" :sizes="size" :src="srcImage" :srcset="computedSrcset" :width="width" :height="height" ref="image"/>
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
    srcset: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    scale: {
      type: String,
      required: false,
      default: null,
      validator: function (value) {
        return ['16:9', '4:3', '3:2', '1:1', '2:3', '3:4', '9:16'].indexOf(value) !== -1
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
      load: false,
      size: null,
    }
  },
  computed: {
    srcImage() {
      return this.load ? this.src : '';
    },
    computedSrcset() {
      return this.load ? this.srcset : '';
    },
    computedClass() {
      if (!this.scale) {
        return `imagery`;
      }

      return `imagery imagery--${this.scale.replace(':', '-')}`
    }
  },
  mounted() {
    this.size = `${this.$refs.image.clientWidth}px`;

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

.imagery--16-9 {
  padding-bottom: percentage(9/16);
}

.imagery--4-3 {
  padding-bottom: percentage(3/4);
}

.imagery--3-2 {
  padding-bottom: percentage(2/3);
}

.imagery--1-1 {
  padding-bottom: percentage(1/1);
}

.imagery--2-3 {
  padding-bottom: percentage(3/2);
}

.imagery--3-4 {
  padding-bottom: percentage(4/3);
}

.imagery--9-16 {
  padding-bottom: percentage(16/9);
}

.imagery--16-9,
.imagery--4-3,
.imagery--3-2,
.imagery--1-1,
.imagery--2-3,
.imagery--3-4,
.imagery--9-16  {
  .imagery__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
}
</style>
