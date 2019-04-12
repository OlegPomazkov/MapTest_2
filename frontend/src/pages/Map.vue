<template lang="pug">
.map
	.map__header КАРТА 

	div(v-if="!isDataReady") Данные не готовы
	  
	map-component(
		v-if="isDataReady"
		:placemarks="points"
		:balloons="descriptions"
		:center="centerCoords"
	)
</template>

<script>
import { mapGetters } from 'vuex' 
import MapComponent from '../components/MapComponent' 

export default {
	components: {
		MapComponent
	},
    computed: {
	  ...mapGetters([
	    'points',
	    'pointDescriptions'
	  ]),
	  descriptions() {
	  	let arr = []

	  	this.pointDescriptions.forEach( i => {
	  		let obj = Object.assign({}, i)
	  		let name = this.points.filter( innerI => innerI.id === i.id)[0].name

	  		obj.name = name
	  		arr.push(obj)
	  	})

	  	return arr
	  },
	  isDataReady() {
	  	if (this.points.length === 0) return false

	  	return this.points.length === this.pointDescriptions.length? true: false
	  },
	  centerCoords() {
	  	if (this.points.length === 0) return [0, 0]

	  	return [this.points[0].latitude, this.points[0].longitude] 
	  }
	},
	created() {
		this.$store.dispatch('getAllData')
  },
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/variables.styl'

	.map
		display flex
		flex-direction column
		justify-content flex-start
		align-items center

		&__header
			margin-top 15px
			margin-bottom 15px		
			font-size $title
			font-weight bold
			color $textColorDark
</style>