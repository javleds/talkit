<template lang="pug">
  .topic-form
    form(@submit.prevent="onSubmit")
      app-input(v-model="topic" placeholder="New topic")
</template>

<script>
import AppInput from './AppInput'
import { mapActions } from 'vuex'

export default {
  components: {
    AppInput
  },
  data () {
    return {
      topic: ''
    }
  },
  methods: {
    ...mapActions({
      addTopic: 'topic/addTopic'
    }),
    onSubmit () {
      const inputValue = this.topic

      const multipleWordDelimiter = ':'
      const firstChar = inputValue.charAt(0)
      const lastChar = inputValue.charAt(inputValue.length - 1)

      console.log('inputValue', inputValue)
      console.log('multipleWordDelimiter', multipleWordDelimiter)
      console.log('firstChar', firstChar)
      console.log('lastChar', lastChar)

      if (firstChar === lastChar && firstChar === multipleWordDelimiter) {
        this.addMultiple(inputValue)
        this.topic = ''
        return
      }

      this.addTopic(inputValue)
      this.topic = ''
    },
    addMultiple (value) {
      const lastCharIndex = value.length - 1
      const values = value.substring(1, lastCharIndex).split(',')

      for (const index in values) {
        this.addTopic(values[index])
      }
    }
  }
}
</script>

<style scoped>

</style>
