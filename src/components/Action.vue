<template lang="pug">
  .action(:style="style")
    app-button(@click="$emit('click')" width="120px")
      slot
</template>

<script>
import AppButton from './AppButton'

export default {
  components: {
    AppButton
  },
  props: {
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
      padding: 15px;
    }
  }
</style>
