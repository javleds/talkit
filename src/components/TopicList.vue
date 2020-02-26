<template lang="pug">
  .topic-list
    button.all(@click="removeAll") Remove all
    ul
      li(v-for="topic in topics")
        | {{ topic }}
        button(@click="removeTopic(topic)") x
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
      padding: 0;
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

    button {
      background-color: transparent;
      border: solid 1px $color;
      padding: 5px;
      color: $color;
      transition: all .3s ease-out;
      min-width: 50px;

      &:focus,
      &:hover {
        outline: none;
      }

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    .all {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }
  }
</style>
