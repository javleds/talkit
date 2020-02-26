<template lang="pug">
  .config
    action(top-left @click="$router.push({ name: 'talk-it' })") Back
    config-form
</template>

<script>
import Action from '../components/Action'
import ConfigForm from '../components/ConfigForm'

export default {
  components: {
    ConfigForm,
    Action
  }
}
</script>

<style scoped>

</style>
