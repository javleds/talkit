export default {
  namespaced: true,
  state: {
    limitTime: 5,
    timeout: 0,
    finishDateTime: null,
    minutes: 5,
    seconds: 0,
    currentStep: 0
  },
  getters: {
    limitTime ({ limitTime }) {
      return limitTime
    },
    displayTime (state) {
      const minutes = state.minutes < 10
        ? `0${state.minutes}`
        : state.minutes

      const seconds = state.seconds < 10
        ? `0${state.seconds}`
        : state.seconds

      return `${minutes}:${seconds}`
    },
    totalSteps (state) {
      return (state.minutes + 1) * 60
    },
    currentStep ({ currentStep }) {
      return currentStep
    }
  },
  mutations: {
    limitTime (state, limitTime) {
      let intValue = parseInt(limitTime)
      if (isNaN(intValue)) {
        intValue = 5
      }

      state.limitTime = parseInt(limitTime)
    },
    timeout (state, timeout) {
      state.timeout = timeout
    },
    clearTimeout (state) {
      clearInterval(state.timeout)
    },
    finishDateTime (state, finishDateTime) {
      state.finishDateTime = finishDateTime
    },
    minutes (state, minutes) {
      state.minutes = minutes
    },
    seconds (state, seconds) {
      state.seconds = seconds
    },
    minutesFromDifference (state, difference) {
      state.minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      )
    },
    secondsFromDifference (state, difference) {
      state.seconds = Math.floor((difference % (1000 * 60)) / 1000)
    },
    currentStep (state, currentStep) {
      state.currentStep = currentStep
    }
  },
  actions: {
    start ({ commit, state }) {
      commit('timeout', setInterval(
        () => {
          if (!state.finishDateTime) {
            const finishDateTime = new Date()
            finishDateTime.setMinutes(finishDateTime.getMinutes() + state.limitTime)
            state.finishDateTime = finishDateTime
          }
          const now = new Date()
          const difference = state.finishDateTime.getTime() - now.getTime()
          commit('minutesFromDifference', difference)
          commit('secondsFromDifference', difference)
          commit('currentStep', state.currentStep + 1)
        },
        1000
      ))
    },
    stop ({ commit, state }) {
      commit('clearTimeout')
      commit('finishDateTime', null)
      commit('minutes', state.limitTime)
      commit('seconds', 0)
      commit('currentStep', 0)
    },
    reset ({ dispatch }) {
      dispatch('stop')
      dispatch('start')
    },
    addMinutes ({ commit, dispatch, state }) {
      if (!state.finishDateTime) {
        dispatch('reset')
        return
      }

      const { finishDateTime, limitTime } = state
      finishDateTime.setMinutes(finishDateTime.getMinutes() + limitTime)
      commit('finishDateTime', finishDateTime)
    }
  }
}
