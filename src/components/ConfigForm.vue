<template lang="pug">
  .config-form
    form(@submit.prevent="onSubmit")
      app-input(v-model="limit" :placeholder="placeholder" label="Limit time:")
      app-button(@click="onSubmit" width="100%") Save
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AppInput from './AppInput'
import AppButton from './AppButton'

export default {
  components: {
    AppButton,
    AppInput
  },
  data () {
    return {
      limit: ''
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
        this.limit = ''
        return
      }

      if (numberLimit < 0) {
        this.limit = ''
        return
      }

      this.setLimitTime(numberLimit)
      this.limit = ''
    }
  }
}
</script>
