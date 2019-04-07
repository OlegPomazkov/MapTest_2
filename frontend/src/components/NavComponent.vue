<template lang="pug">
  el-menu.nav_wrapper(
    :default-active="defaultActive"
    mode="horizontal"
  )
    el-menu-item(index="1")
      router-link.nav_wrapper__link(to="/data") ТАБЛИЦА
    
    el-menu-item(index="2")
      router-link.nav_wrapper__link(to="/map") КАРТА
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
  
  &__link
    text-decoration none
    font-size $postLargeText
    font-weight bold
</style>