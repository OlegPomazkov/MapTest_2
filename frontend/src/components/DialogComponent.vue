<template lang="pug">
  el-dialog.dialog(
    :visible="true" 
    :show-close="false"
    title="ОПИСАНИЕ ТОЧКИ"
  )
  
    .dialog__item(
      v-for="item in config"
      :key="item.id"
    )

      span.dialog__item__label {{item.label}}
      span.dialog__item__content(
        v-if="item.type !== 'image'"
      ) {{pointData[item.name]}}
      img.dialog__item__image(
        v-if="item.type === 'image'"
        :src="pointData[item.name]"
      )

    router-link.dialog__control(to="/data")
      el-button.dialog__control__button(type="primary") Закрыть диалог
</template>

<script>
import { mapGetters } from 'vuex'  
import DATA_CONFIG from '../utils/dataConfig'

export default {
  data() {
    return{
      config: DATA_CONFIG,
      pointId: null
    }
  },
  computed: {
    ...mapGetters([
      'pointDescriptionById'
    ]),
    pointData() {
      if(this.pointId === null) return {} 

      return this.pointDescriptionById(this.pointId)
     }
  },
  created() {
    this.pointId = +this.$route.params.id
    this.$store.dispatch('setCurrentPoint', this.pointId)
  },
  watch: {
    '$route' (to, from) {
      this.pointId = +to.params.id
      this.$store.dispatch('setCurrentPoint', this.pointId)      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/variables.styl'

.dialog
  font-size $subtitle
  font-weight bold

  &__item
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
    padding-top 5px
    padding-bottom 5px
    border-bottom 0.5px solid $line

    &__label
      width 150px
      font-size $preLargeText
      font-style italic

    &__content
      font-size $largeText
      font-weight normal

  &__control
    width 100%
    text-decoration none
    display flex
    justify-content center
    align-items center

    &__button
      margin-top 20px
</style>
