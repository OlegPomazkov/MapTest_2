<template lang="pug">
.dialog
  .dialog__content
    .dialog__content__title ОПИСАНИЕ ТОЧКИ

    .dialog__content__item(
      v-for="item in config"
      :key="item.id"
    )

      .dialog__content__item__label {{item.label}}
      .dialog__content__item__content(
        v-if="item.type !== 'image'"
      ) {{pointData[item.name]}}
      img.dialog__content__item__image(
        v-if="item.type === 'image'"
        :src="pointData[item.name]"
      )

    router-link.dialog__content__control(to="/")
      button.dialog__content__control__button(type="primary") ЗАКРЫТЬ   
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
  position fixed
  left 0
  top 0
  width 100%
  height 100%
  background-color $transparentBackground
  z-index 10

  &__content
    max-width 500px
    margin-top 50px
    margin-left auto
    margin-right auto 
    display flex
    flex-direction column
    justify-content flex-start
    align-items center    
    font-weight bold
    color $textColorDark
    background-color #fff
    border-radius 5px
    z-index 100

    &__title
      width 100%
      margin-bottom 10px
      padding-top 10px
      padding-bottom 10px
      align-self center
      text-align center
      font-size $subtitle
      background-color $lightBlue
      border-radius 5px 5px 0 0

    &__item
      width 98%
      padding-top 15px
      padding-bottom 5px      
      display flex
      flex-direction row
      justify-content flex-start
      align-items center
      border-bottom 0.5px solid $line

      &__label
        width 150px
        padding-left 5px
        font-size $preLargeText
        font-style italic

      &__content
        font-size $largeText
        font-weight normal
        color $textColorLight

    &__control
      align-self center
      text-decoration none
      display flex
      justify-content center
      align-items center

      &__button
        height 30px
        width 150px
        margin-top 20px
        margin-bottom 20px
        border none
        border-radius 3px
        background-color $blue
        font-size $largeText
        color $white
        &:hover
          cursor pointer
          background-color $darkBlue
</style>
