export default {
  namespaced: true,
  state: {
    topics: ['Vue js', 'React', 'Angular', 'hosting', 'frontend', 'react', 'arquitectura', 'SOLID', 'STUPID', 'PHP', 'golang', 'POO', 'dart', 'Android', 'Facades', 'Monolito', 'Laravel'],
    topic: ''
  },
  getters: {
    topic ({ topic }) {
      return topic
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
      const index = Math.floor(Math.random() * state.topics.length)
      commit('topic', state.topics[index])
    }
  }
}
