<template lang="pug">
  .config-form
    form(@submit.prevent="onSubmit")
      app-input(:value="limitTime" @input="setLimitTime" placeholder="Limit time" label="Limit time:")
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
