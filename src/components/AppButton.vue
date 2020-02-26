<template lang="pug">
  .app-button
    button(@click="$emit('click')" type="button" :style="style")
      slot
</template>

<script>
export default {
  props: {
    width: { type: String, default: '150px' }
  },
  data () {
    const style = {
      width: this.width
    }

    return {
      style
    }
  }
}
</script>

<style lang="scss">
  $color: #ffffff;

  .app-button {
    button {
      opacity: .6;
      background-color: transparent;
      border: solid 1px $color;
      padding: 5px;
      color: $color;
      transition: all .3s ease-out;

      &:focus,
      &:hover {
        outline: none;
        opacity: 1;
      }

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
</style>
