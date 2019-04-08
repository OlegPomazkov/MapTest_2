<template lang="pug">
  .table
    .table__header ТАБЛИЦА КООРДИНАТ 
    
    table-component(
      :points="points"
      @rowClicked="handleRowClicked"
    )

    router-view
</template>

<script>
import { mapGetters } from 'vuex' 
import TableComponent from '../components/TableComponent' 

export default {
	components: {
		TableComponent
	},
  computed: {
	  ...mapGetters([
	    'points'
	  ])
	},
  created() {
  	if (this.points.length === 0) {
      this.$store.dispatch('getAllPoints')
  	}
  },
  methods: {
  	handleRowClicked(row) {
  		this.$router.push({ name: "dialog", params: {id: row.id}})
  	},
  }
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/variables.styl'

	.table
		display flex
		flex-direction column
		justify-content flex-start
		align-items center

		&__header
			font-size $title
			font-weight bold
			color $textColorDark
			margin-top 15px
			margin-bottom 15px
</style>