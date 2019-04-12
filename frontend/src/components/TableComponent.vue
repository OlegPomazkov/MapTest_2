<template lang="pug">
table.table
	
	tr.table__header
		th.table__header__cell(
			v-for="item in tableConfig"
			:key="item.id"
			:style="{width: item.width}"
		) {{item.label}}
	
	tbody.table__body

		tr.table__body__row(
			v-for="(point, k) in points"
			:key="point.id"
			@click="handleRowClick(k)"
		) 
	
			td.table__body__row__cell(
				v-for="item in tableConfig"
				:key="`${point.id}_${item.id}`"
				:style="{width: item.width}"
			) {{point[item.name]}}
</template>

<script>
import DATA_CONFIG from '../utils/dataConfig'

export default {
	props: {
		points: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			tableConfig: DATA_CONFIG.filter(i => i.tableView)
		}
	},
	methods: {
		handleRowClick(k) {
			this.$emit('rowClicked', this.points[k])
		}
	}

}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/variables.styl'

	.table
		color $textColorDark
		border-collapse collapse

		&__header
			height $largeTableRowHeight
			font-size $largeText
			font-weight bold
			background-color $lightBlue
			&__cell
				border-bottom 1.3px solid $line

		&__body
			font-size $postNormalTex
			color $textColorLight
			&__row
				height $tableRowHeight
				&:hover
					cursor pointer
					background-color $lightBackground

				&__cell
					text-align center
					border-bottom 0.8px solid $line
</style>