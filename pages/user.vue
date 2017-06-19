<template>
  
</template>

<script>
  export default {
    layout: 'header',

    mounted () {
      this.$store.commit('changePage', 'user')
    }
  }
</script>
