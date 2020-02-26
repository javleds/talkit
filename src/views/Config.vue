<template lang="pug">
  .config
    action(top-left :on-click="() => $router.push({ name: 'talk-it' })") Back
</template>

<script>
import Action from '../components/Action'

export default {
  components: {
    Action
  }
}
</script>

<style scoped>

</style>
