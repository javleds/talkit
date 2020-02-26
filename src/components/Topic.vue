<template lang="pug">
  .topic
    h1 {{ topic.toUpperCase() }}
</template>

<script>
export default {
  props: ['topic']
}
</script>

<style scoped>

</style>
