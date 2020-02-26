<template lang="pug">
  .topic-list
    app-button.all(@click="removeAll" width="100%") Remove all
    ul
      li(v-for="topic in topics")
        | {{ topic }}
        app-button(@click="removeTopic(topic)" width="50px") x
</template>

<script>
import AppButton from './AppButton'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapGetters({
      topics: 'topic/topics'
    })
  },
  methods: {
    ...mapActions({
      removeTopic: 'topic/removeTopic',
      removeAll: 'topic/removeAll'
    })
  }
}
</script>

<style lang="scss">
  $color: #ffffff;

  .topic-list {
    ul {
      list-style: none;
      margin: 0;
      padding: 0 5px 0 0 ;
      max-height: 80vh;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
      }
    }

    .all {
      margin-bottom: 15px;
    }
  }
</style>
