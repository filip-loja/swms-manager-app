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
			<swms-bin-table />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import SwmsDrawer from 'components/SwmsDrawer.vue'
import SwmsOptionPanel from 'components/SwmsOptionPanel.vue'
import SwmsBinTable from 'components/SwmsBinTable.vue'

export default Vue.extend({
  name: 'MainLayout',
	components: { SwmsDrawer, SwmsOptionPanel, SwmsBinTable },
  data() {
    return {
    }
  },
	methods: {
    openDrawer (bindId: string) {
      void this.$store.dispatch('openDrawer', bindId)
		}
	}
})
</script>
