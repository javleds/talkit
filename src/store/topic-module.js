export default {
  namespaced: true,
  state: {
    topics: ['VUE JS', 'REACT', 'ANGULAR', 'HOSTING', 'FRONTEND', 'REACT', 'ARQUITECTURA', 'SOLID', 'STUPID', 'PHP', 'GOLANG', 'POO', 'DART', 'ANDROID', 'FACADES', 'MONOLITO', 'LARAVEL'],
    topic: ''
  },
  getters: {
    topic ({ topic }) {
      return topic.toUpperCase()
    },
    topics ({ topics }) {
      return topics.map((topic) => topic.toUpperCase())
    }
  },
  mutations: {
    topic (state, topic) {
      state.topic = topic
    },
    topics (state, topics) {
      state.topics = topics
    }
  },
  actions: {
    changeTopic ({ commit, state }) {
      const { topics } = state

      if (topics.length === 0) {
        commit('topic', 'Empty topic list')
        return
      }

      const index = Math.floor(Math.random() * topics.length)
      commit('topic', topics[index])
    },
    addTopic ({ commit, state }, topic) {
      const { topics } = state
      const cleanTopic = topic.toUpperCase().trim()

      if (topic.length === 0) {
        return
      }

      if (topics.indexOf(cleanTopic) !== -1) {
        return
      }

      topics.push(topic.toUpperCase())
      commit('topics', topics)
    },
    removeTopic ({ commit, state }, topic) {
      const { topics } = state
      commit('topics', topics.filter((t) => t.toUpperCase() !== topic.toUpperCase()))
    },
    removeAll ({ commit }) {
      commit('topics', [])
    },
    isValidTopic ({ state }, value) {
      if (value.length === 0) {
        return false
      }

      if (state.topics.indexOf(value) !== -1) {
        return false
      }

      return true
    }
  }
}
