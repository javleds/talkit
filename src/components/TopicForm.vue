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
      const topic = this.topic
      this.addTopic(topic)
      this.topic = ''
    }
  }
}
</script>

<style scoped>

</style>
