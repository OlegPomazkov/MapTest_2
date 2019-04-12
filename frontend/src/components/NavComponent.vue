<template lang="pug">
  .nav_wrapper(
    :default-active="defaultActive"
    mode="horizontal"
  )

    router-link.nav_wrapper__link(to="/" exact) ТАБЛИЦА
    router-link.nav_wrapper__link(to="/map" exact) КАРТА
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '1'
    }
  },
  created() {
    this.defaultActive = this.$route.path === '/map'? '2':'1'
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/variables.styl'

.nav_wrapper
  width 100%
  max-width 750px
  margin-left auto
  margin-right auto
  padding-bottom 1px
  display flex
  flex-direction row
  justify-content space-around
  align-items center
  border-bottom 2px solid $line

  &__link
    padding-bottom 10px
    text-decoration none
    font-size $postLargeText
    font-weight bold
    color $textColorLight
    border-bottom 3px solid $white
    &:visited
      color $textColorLight
    &.router-link-active 
      color $textColorDark
      border-bottom 3px solid $blue   
      transition all 0.5s ease   
</style>