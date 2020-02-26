export default {
  namespaced: true,
  state: {
    limitTime: 5,
    timeout: 0,
    finishDateTime: null,
    minutes: 5,
    seconds: 0
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
    }
  },
  mutations: {
    limitTime (state, limitTime) {
      state.limitTime = limitTime
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
        },
        1000
      ))
    },
    stop ({ commit, state }) {
      commit('clearTimeout')
      commit('finishDateTime', null)
      commit('minutes', state.limitTime)
      commit('seconds', 0)
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
