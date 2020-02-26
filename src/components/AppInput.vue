<template lang="pug">
  .app-input
    label(v-if="label !== ''") {{ label }}
    input(type="text" :placeholder="placeholder" :value="value" @input="onInput")
</template>

<script>
export default {
  props: {
    value: { required: true },
    placeholder: { type: String, default: '' },
    label: { type: String, default: '' }
  },
  methods: {
    onInput ($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style lang="scss">
  $color: #ffffff;

  .app-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      flex-basis: 70%;
      padding: 10px;
      margin: 20px 5px;
      border: none;
      border-bottom: solid 1px $color;
      outline: none;
      background-color: transparent;
      width: 90%;
      font-size: 20px;
      color: $color;

      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba($color, .7);
        opacity: 1; /* Firefox */
      }

      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba($color, .7);
      }

      &::-ms-input-placeholder { /* Microsoft Edge */
        color: rgba($color, .7);
      }
    }
  }
</style>
