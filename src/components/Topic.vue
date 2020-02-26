<template lang="pug">
  .topic
    h1 {{ topic }}
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
