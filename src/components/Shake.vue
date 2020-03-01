<template lang="pug">
  .shake(:class="{ active: shake }" @animationend="$emit('end')")
    slot
</template>

<script>
export default {
  props: {
    shake: { type: Boolean, required: true }
  }
}
</script>

<style lang="scss">
  @keyframes shake {
    10%, 90% {
      transform: translateX(-1px);
    }

    20%, 80% {
      transform: translateX(2px);
    }

    30%, 50%, 70% {
      transform: translateX(-4px);
    }

    40%, 60% {
      transform: translateX(4px);
    }
  }

  .shake {
    &.active {
      animation: shake;
      animation-duration: .5s;
    }
  }
</style>
