<template lang="pug">
	el-table(
		height="500"
		:style="{width: '500px'}"
		:highlight-current-row="true"
		:data="points"
		@row-click="handleRowClick"
	)
		el-table-column(
			v-for="item in tableConfig" 
			:width="item.width"
			:label="item.label" 
			:prop="item.name"
			:key="item.id"
		)
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
		handleRowClick(row) {
			this.$emit('rowClicked', row)
		}
	}

}
</script>
