<template lang="pug">
  .topic-form
    form(@submit.prevent="onSubmit")
      shake(:shake="shake.topic" @end="shake.topic = false")
        app-input(v-model="topic" placeholder="New topic")
</template>

<script>
import AppInput from './AppInput'
import Shake from './Shake'

import { mapActions } from 'vuex'

export default {
  components: {
    AppInput,
    Shake
  },
  data () {
    return {
      topic: '',
      shake: {
        topic: false
      }
    }
  },
  methods: {
    ...mapActions({
      addTopic: 'topic/addTopic',
      isValidTopic: 'topic/isValidTopic'
    }),
    async onSubmit () {
      const inputValue = this.topic.toUpperCase().trim()

      if (!await this.isValidTopic(inputValue)) {
        this.shake.topic = true
        return
      }

      const multipleWordDelimiter = ':'
      const firstChar = inputValue.charAt(0)
      const lastChar = inputValue.charAt(inputValue.length - 1)

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
