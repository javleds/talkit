<template lang="pug">
  .talk-it
    topic
    timer
    action(bottom-left :on-click="addMinutes") + {{ limitTime }}
    action(bottom-right :on-click="handleChangeTopic") Skip!

</template>

<script>
import Topic from '../components/Topic'
import Timer from '../components/Timer'
import Action from '../components/Action'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Action,
    Topic,
    Timer
  },
  computed: {
    ...mapGetters({
      limitTime: 'timer/limitTime'
    })
  },
  methods: {
    ...mapActions({
      reset: 'timer/reset',
      addMinutes: 'timer/addMinutes',
      changeTopic: 'topic/changeTopic'
    }),
    handleChangeTopic () {
      this.changeTopic()
      this.reset()
    }
  },
  mounted () {
    this.handleChangeTopic()
  }
}
</script>

<style lang="scss">
  .talk-it {
    text-align: center;
  }
</style>
