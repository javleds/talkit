export default {
  namespaced: true,
  state: {
    topics: ['Vue js', 'React', 'Angular', 'hosting', 'frontend', 'react', 'arquitectura', 'SOLID', 'STUPID', 'PHP', 'golang', 'POO', 'dart', 'Android', 'Facades', 'Monolito', 'Laravel'],
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
      topics.push(topic.toUpperCase())
      commit('topics', topics)
    },
    removeTopic ({ commit, state }, topic) {
      const { topics } = state
      commit('topics', topics.filter((t) => t.toUpperCase() !== topic.toUpperCase()))
    },
    removeAll ({ commit }) {
      commit('topics', [])
    }
  }
}
