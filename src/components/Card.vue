<template>
  <div class="card">
    <div class="card__image" :style="{'background-image': 'url(' + image + ')'}"></div>
    <div class="card__content">
      <div class="card__header">
        <slot name="header"></slot>
      </div>
      <slot name="content"></slot>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['image']
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.card__image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 150px;
  width: 100%;
}

.card__content {
  padding: 1rem;
}

.card__header {
  font-size: 1.25rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  margin-bottom: 0.5rem;
}

.card__footer {
  margin-top: auto;
  border-top: 1px solid lightgray;
  padding: 1rem;
}
</style>