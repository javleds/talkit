<template lang="pug">
  .config-form
    form(@submit.prevent="onSubmit")
      shake(:shake="shake.timeLimit" @end="shake.timeLimit = false")
        app-input(v-model="limit" :placeholder="placeholder" label="Limit time:")
      app-button(@click="onSubmit" width="100%") Save
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AppInput from './AppInput'
import AppButton from './AppButton'
import Shake from './Shake'

export default {
  components: {
    AppButton,
    AppInput,
    Shake
  },
  data () {
    return {
      limit: '',
      shake: {
        timeLimit: false
      }
    }
  },
  computed: {
    ...mapGetters({
      limitTime: 'timer/limitTime'
    }),
    placeholder () {
      return `Limit time (${this.limitTime} by now)`
    }
  },
  methods: {
    ...mapMutations({
      setLimitTime: 'timer/limitTime'
    }),
    onSubmit () {
      const numberLimit = parseInt(this.limit)

      if (isNaN(numberLimit)) {
        this.shake.timeLimit = true
        this.limit = ''
        return
      }

      if (numberLimit < 0) {
        this.shake.timeLimit = true
        this.limit = ''
        return
      }

      this.setLimitTime(numberLimit)
      this.limit = ''
    }
  }
}
</script>

<style lang="scss">
  .config-form {
    padding: 0 25px;
  }
</style>
