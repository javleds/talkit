<template lang="pug">
  .action(:style="style")
    button(type="button" @click="onClick")
      slot
</template>

<script>
export default {
  props: {
    onClick: { type: Function, required: true },
    topLeft: { type: Boolean, required: false },
    topRight: { type: Boolean, required: false },
    bottomLeft: { type: Boolean, required: false },
    bottomRight: { type: Boolean, required: false }
  },
  data () {
    const spacing = '15px'
    const style = {
      margin: spacing
    }

    if (this.topLeft) {
      style.top = spacing
      style.left = spacing
    }

    if (this.topRight) {
      style.top = spacing
      style.right = spacing
    }

    if (this.bottomLeft) {
      style.bottom = spacing
      style.left = spacing
    }

    if (this.bottomRight) {
      style.bottom = spacing
      style.right = spacing
    }

    return {
      style
    }
  }
}
</script>

<style lang="scss">
  $color: #ffffff;

  .action {
    position: absolute;

    button {
      background-color: transparent;
      border: solid 1px $color;
      padding: 15px;
      color: $color;
      transition: all .3s ease-out;
      min-width: 120px;

      &:focus,
      &:hover {
        outline: none;
      }

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
</style>
