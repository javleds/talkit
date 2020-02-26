<template lang="pug">
  .talk-it
    vue-circle(
      start-color="rgba(255, 255, 255, .5)"
      stop-color="rgba(255, 255, 255, .5)"
      innerStrokeColor="rgba(255, 255, 255, .2)"
      :diameter="350"
      :total-steps="totalSteps"
      :completed-steps="currentStep"
    )
      topic
      timer
    action(top-left @click="$router.push({ name: 'topics' })") Topics
    action(top-right @click="$router.push({ name: 'config' })") Config
    action(bottom-left @click="addMinutes") + {{ limitTime }}
    action(bottom-right @click="handleChangeTopic") Skip!

</template>

<script>
import Topic from '../components/Topic'
import Timer from '../components/Timer'
import Action from '../components/Action'
import VueCircle from 'vue-radial-progress'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Action,
    Topic,
    Timer,
    VueCircle
  },
  computed: {
    ...mapGetters({
      limitTime: 'timer/limitTime',
      totalSteps: 'timer/totalSteps',
      currentStep: 'timer/currentStep'
    })
  },
  methods: {
    ...mapActions({
      reset: 'timer/reset',
      stop: 'timer/stop',
      addMinutes: 'timer/addMinutes',
      changeTopic: 'topic/changeTopic'
    }),
    handleChangeTopic () {
      this.changeTopic()
      this.reset()
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters['timer/displayTime'],
      (newValue) => {
        if (newValue === '00:00') {
          this.handleChangeTopic()
        }
      }
    )
  },
  mounted () {
    this.handleChangeTopic()
  },
  destroyed () {
    this.stop()
  }
}
</script>

<style lang="scss">
  .talk-it {
    text-align: center;
  }
</style>
