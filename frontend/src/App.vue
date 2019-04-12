<template lang="pug">
  #app.app_wrapper
    nav-component
    router-view  
</template>

<script>
import NavComponent from './components/NavComponent'

export default {
  name: 'app',
  components: {
    NavComponent
  },
}
</script>

<style lang="stylus">
@import './assets/styles/variables.styl'

.app_wrapper
  width 750px
  margin-left auto
  margin-right auto
  margin-top 10px
  position relative
  font-family sans-serif
</style>
