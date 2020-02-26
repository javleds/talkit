<template lang="pug">
  .timer
    h2 {{ displayTime }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      displayTime: 'timer/displayTime'
    })
  }
}
</script>
