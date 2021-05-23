<template>
	<div class="swms-bin-table-wrapper q-pa-md">
		<table v-if="binItems.length">
			<tr>
				<th>#</th>
				<th>Bin ID</th>
				<th>Type</th>
				<th>Status</th>
				<th>Actions</th>
			</tr>
			<tr v-for="(item, index) in binItems" :key="item.binId">
				<td>{{ index + 1 }}</td>
				<td><a class="swms-link" @click="viewDetails(item.binId)">{{ item.binId }}</a></td>
				<td><swms-badge :value="item.type" /></td>
				<td><swms-badge :value="item.status" /></td>
				<td>
					<q-btn round flat color="primary" icon="visibility" size="sm" @click="viewDetails(item.binId)" />
					<q-btn round flat color="negative" icon="delete" size="sm" />
				</td>
			</tr>
		</table>
		<div class="text-center full-width" v-if="hasMore">
			<br />
			<q-btn flat color="primary" @click="loadMore">Load more</q-btn>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BinDetail } from '../store/store'
import SwmsBadge from 'components/SwmsBadge.vue'
export default Vue.extend({
	name: 'SwmsBinTable',
	components: { SwmsBadge },
	computed: {
    binItems (): BinDetail[] {
      return this.$store.state.binItems as BinDetail[]
    },
    hasMore (): boolean {
      return !!this.$store.state.nextToken
    }
	},
	methods: {
    loadMore () {
      void this.$store.dispatch('loadBins')
    },
    viewDetails (bindId: string) {
      void this.$store.dispatch('openDrawer', bindId)
    }
	},
  mounted () {
    this.loadMore()
  }
})
</script>

<style scoped lang="scss">

	.swms-bin-table-wrapper {
		display: block;
		box-sizing: border-box;
		width: 100%;
		max-width: 700px;

		table {
			border-collapse: collapse;
			width: 100%;
			tr + tr {
				border-top: 1px solid $grey-5;
			}

			th, td {
				text-align: center;
				padding: 3px 7px;
			}

			td {
				width: 32%;
			}

			td:first-child,
			td:last-child {
				width: 1px;
				white-space: nowrap;
			}
		}
	}

</style>
