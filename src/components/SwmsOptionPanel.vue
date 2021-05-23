<template>
	<div class="swms-option-panel">
		<div class="swms-btn-wrapper">
			<q-btn @click="openDrawer(null)" no-caps flat color="primary">
				Create new&nbsp;
				<q-icon name="add" size="xs" />
			</q-btn>
		</div>

		<q-btn @click="openFilterDialog" no-caps flat color="primary">
			Filter&nbsp;
			<q-icon name="filter_alt" size="xs" />
		</q-btn>

		<q-input outlined dense v-model="searchBinModel" bg-color="white" class="q-ml-sm swms-search-field" placeholder="Search bin by ID" @keydown.enter="searchBin">
			<template v-slot:append>
				<q-btn round flat icon="search" @click="searchBin" />
			</template>
		</q-input>

		<swms-filter-dialog />

	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import SwmsFilterDialog from 'components/SwmsFilterDialog.vue'
export default Vue.extend({
	name: 'SwmsOptionPanel',
	components: { SwmsFilterDialog },
	data () {
	  return {
	    searchBinModel: '',
		}
	},
  methods: {
    openDrawer (bindId: string) {
      void this.$store.dispatch('openDrawer', bindId)
    },
    openFilterDialog () {
      this.$store.commit('SET_FILTER_DIALOG', true)
		},
		searchBin (): void {
      let id = this.searchBinModel.trim()
			if (!id) {
			  return
			}
      if (!id.startsWith('bin-')) {
        id = 'bin-' + Number(id).toString().padStart(3, '0')
			}
			console.log(id)
		}
  },
	computed: {
	}
})
</script>

<style scoped lang="scss">

	$border-color: #cbcaca;
	.swms-option-panel {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		height: 50px;
		background: #ecebeb;
		width: 100%;
		border-bottom: 1px solid $border-color;
		padding: 0 5px;
	}

	.swms-btn-wrapper {
		padding-right: 5px;
		margin-right: 10px;
		border-right: 1px solid $border-color;
	}

	.swms-search-field ::v-deep .q-field__control {
		padding-right: 0 !important;
	}

</style>
