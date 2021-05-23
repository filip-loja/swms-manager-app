<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
				<q-icon name="delete_sweep" size="md" />

        <q-toolbar-title>
          SWMS Manager
        </q-toolbar-title>

        <div>Created by: <b>Filip Loja</b></div>
      </q-toolbar>
    </q-header>
		<swms-drawer />

    <q-page-container>
			<swms-option-panel />
			<pre>{{ binItems }}</pre>
			<q-btn v-if="hasMore" @click="loadMore">Load more</q-btn>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import SwmsDrawer from 'components/SwmsDrawer.vue'
import SwmsOptionPanel from 'components/SwmsOptionPanel.vue'
import { BinDetail } from 'src/store/store'

export default Vue.extend({
  name: 'MainLayout',
	components: { SwmsDrawer, SwmsOptionPanel },
  data() {
    return {
    }
  },
	methods: {
    openDrawer (bindId: string) {
      void this.$store.dispatch('openDrawer', bindId)
		},
		loadMore () {
      void this.$store.dispatch('loadBins')
		}
	},
	computed: {
    binItems (): BinDetail[] {
      return this.$store.state.binItems as BinDetail[]
		},
		hasMore (): boolean {
      return !!this.$store.state.nextToken
		}
	},
	mounted () {
    this.loadMore()
  }
})
</script>
