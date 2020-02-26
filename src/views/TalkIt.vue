<template lang="pug">
  .talk-it
    topic(:topic="topic")
    timer(:display-time="displayTime")
    action(bottom-left :on-click="addMinutes") + 5
    action(bottom-right :on-click="changeTopic") Skip!

</template>

<script>
import Topic from '../components/Topic'
import Timer from '../components/Timer'
import Action from '../components/Action'

export default {
  components: {
    Action,
    Topic,
    Timer
  },
  data () {
    return {
      topics: ['Vue js', 'React', 'Angular', 'hosting', 'frontend', 'react', 'arquitectura', 'SOLID', 'STUPID', 'PHP', 'golang', 'POO', 'dart', 'Android', 'Facades', 'Monolito', 'Laravel'],
      topic: 'Vue js',
      limitTime: 5,
      timeout: 0,
      finishDateTime: null,
      minutes: 5,
      seconds: 0
    }
  },
  computed: {
    displayTime () {
      const minutes = this.minutes < 10
        ? `0${this.minutes}`
        : this.minutes

      const seconds = this.seconds < 10
        ? `0${this.seconds}`
        : this.seconds

      return `${minutes}:${seconds}`
    }
  },
  methods: {
    start () {
      this.timeout = setInterval(
        () => {
          if (!this.finishDateTime) {
            const finishDateTime = new Date()
            finishDateTime.setMinutes(finishDateTime.getMinutes() + this.limitTime)
            this.finishDateTime = finishDateTime
          }
          const now = new Date()
          const difference = this.finishDateTime.getTime() - now.getTime()
          this.minutes = this._getMinutes(difference)
          this.seconds = this._getSeconds(difference)
        },
        1000
      )
    },
    stop () {
      clearInterval(this.timeout)
      this.finishDateTime = null
      this.minutes = this.limitTime
      this.seconds = 0
    },
    reset () {
      this.stop()
      this.start()
    },
    addMinutes () {
      if (!this.finishDateTime) {
        this.reset()
        return
      }

      this.finishDateTime.setMinutes(this.finishDateTime.getMinutes() + this.limitTime)
    },
    changeTopic () {
      const index = Math.floor(Math.random() * this.topics.length)
      this.topic = this.topics[index]
      this.reset()
    },
    _getMinutes (difference) {
      return Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      )
    },
    _getSeconds (difference) {
      return Math.floor((difference % (1000 * 60)) / 1000)
    }
  },
  mounted () {
    this.changeTopic()
  }
}
</script>

<style lang="scss">
  .talk-it {
    text-align: center;
  }
</style>
