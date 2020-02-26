<template lang="pug">
  .topics
    .row
      .form
        topic-form
      .list
        topic-list
    action(top-left :on-click="() => $router.push({ name: 'talk-it' })") Back
</template>

<script>
import Action from '../components/Action'
import TopicForm from '../components/TopicForm'
import TopicList from '../components/TopicList'

export default {
  components: {
    Action,
    TopicList,
    TopicForm
  }
}
</script>

<style lang="scss">
  .topics {
    width: 100%;
    .row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .form {
        flex-basis: 40%;
      }
      .list {
        flex-basis: 40%;
      }
    }
  }
</style>
