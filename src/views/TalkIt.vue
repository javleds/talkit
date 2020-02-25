<template lang="pug">
  .talk-it
    topic(:topic="topic")
    timer(:limit-time="limitTime")
</template>

<script>
import Topic from '../components/Topic'
import Timer from '../components/Timer'

export default {
  components: {
    Topic,
    Timer
  },
  data () {
    return {
      topic: 'Vue js',
      limitTime: 5,
      currentTimer: 0
    }
  }
}
</script>

<style lang="scss">
  .talk-it {
    text-align: center;
  }
</style>
