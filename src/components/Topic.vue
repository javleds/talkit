<template lang="pug">
  .topic
    h1 {{ topic.toUpperCase() }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      topic: 'topic/topic'
    })
  }
}
</script>

<style scoped>

</style>
