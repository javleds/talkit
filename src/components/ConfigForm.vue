<template lang="pug">
  .config-form
    form(@submit.prevent="onSubmit")
      app-input(:value="limitTime" @input="setLimitTime" placeholder="Limit time")
      button Save
</template>

<script>
import AppInput from './AppInput'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    AppInput
  },
  computed: {
    ...mapGetters({
      limitTime: 'timer/limitTime'
    })
  },
  methods: {
    ...mapMutations({
      setLimitTime: 'timer/limitTime'
    }),
    onSubmit () {
      this.setLimitTime(this.limitTime)
      this.$router.push({ name: 'talk-it' })
    }
  }
}
</script>

<style lang="scss">
  $color: #ffffff;

  .config-form {
    button {
      background-color: transparent;
      border: solid 1px $color;
      padding: 5px;
      color: $color;
      transition: all .3s ease-out;
      width: 100%;

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
