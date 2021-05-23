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

<!--    <q-drawer-->
<!--      v-model="leftDrawerOpen"-->
<!--      show-if-above-->
<!--      bordered-->
<!--      content-class="bg-grey-1"-->
<!--			side="right"-->
<!--			:width="600"-->
<!--			no-swipe-open-->
<!--			no-swipe-close-->
<!--		>-->
<!--			<div class="q-px-md q-py-sm swms-drawer">-->
<!--				<div>-->
<!--					<div class="row justify-between items-center">-->
<!--						<div class="text-h5">Drawer name</div>-->
<!--						<div>-->
<!--							<q-btn-->
<!--								@click="leftDrawerOpen = false"-->
<!--								icon="close"-->
<!--								color="negative"-->
<!--								round-->
<!--								flat-->
<!--							/>-->
<!--						</div>-->
<!--					</div>-->
<!--					<hr />-->
<!--					<div class="q-pt-sm"></div>-->
<!--					<div class="row q-mb-lg q-gutter-md">-->
<!--						<div class="col">-->
<!--							<q-input outlined dense bg-color="white" label="Smart Bin ID">-->
<!--								<template v-slot:append>-->
<!--									<q-btn round flat size="sm" icon="content_paste" />-->
<!--								</template>-->
<!--							</q-input>-->
<!--						</div>-->
<!--						<div class="col">-->
<!--							<q-select outlined dense bg-color="white" v-model="model" :options="options" label="Type" />-->
<!--						</div>-->
<!--					</div>-->

<!--					<div class="row q-gutter-md">-->
<!--						<div class="col">-->
<!--							<q-input outlined dense bg-color="white" label="Latitude">-->
<!--								<template v-slot:append>-->
<!--									<q-btn round flat size="sm" icon="content_paste" />-->
<!--								</template>-->
<!--							</q-input>-->
<!--						</div>-->
<!--						<div class="col">-->
<!--							<q-input outlined dense bg-color="white" label="Longitude">-->
<!--								<template v-slot:append>-->
<!--									<q-btn round flat size="sm" icon="content_paste" />-->
<!--								</template>-->
<!--							</q-input>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="q-mb-md">-->
<!--						<a class="swms-link">Select on map</a>-->
<!--					</div>-->

<!--					<div class="q-mb-md">-->
<!--						<q-input outlined dense bg-color="white" label="Connection string">-->
<!--							<template v-slot:append>-->
<!--								<q-btn round flat size="sm" icon="content_paste" />-->
<!--							</template>-->
<!--						</q-input>-->
<!--						<p class="text-caption text-grey-7">Use this string to pair the smart bin with the system. </p>-->
<!--					</div>-->

<!--					<div class="q-mb-lg">-->
<!--						<p class="q-mb-none text-grey-7">Device status</p>-->
<!--						<q-btn-toggle-->
<!--							v-model="buttonToggle"-->
<!--							spread-->
<!--							no-caps-->
<!--							unelevated-->
<!--							toggle-color="primary"-->
<!--							color="blue-1"-->
<!--							text-color="primary"-->
<!--							size="md"-->
<!--							:options="[-->
<!--						{label: 'Enabled', value: 'one'},-->
<!--						{label: 'Disabled', value: 'two'}-->
<!--        	]"-->
<!--						/>-->
<!--					</div>-->

<!--					<q-select-->
<!--						v-model="modelAddUnique"-->
<!--						label="Districts"-->
<!--						outlined-->
<!--						dense-->
<!--						bg-color="white"-->
<!--						use-input-->
<!--						use-chips-->
<!--						multiple-->
<!--						hide-dropdown-icon-->
<!--						input-debounce="0"-->
<!--						new-value-mode="add-unique"-->
<!--						class="q-mb-lg"-->
<!--					/>-->
<!--				</div>-->

<!--				<div>-->
<!--					<hr />-->
<!--					<div class="row q-gutter-md justify-center">-->
<!--						<div class="col-4"><q-btn flat color="positive" style="width: 100%">Save</q-btn></div>-->
<!--						<div class="col-4"><q-btn flat color="negative" style="width: 100%">Cancel</q-btn></div>-->
<!--					</div>-->
<!--				</div>-->

<!--			</div>-->
<!--    </q-drawer>-->

		<swms-drawer />

    <q-page-container>
			<q-btn @click="openDrawer(null)">Create smart bin</q-btn>
<!--      <router-view />-->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import SwmsDrawer from 'components/SwmsDrawer.vue'

export default Vue.extend({
  name: 'MainLayout',
	components: { SwmsDrawer },
  data() {
    return {
      leftDrawerOpen: false,
      model: null,
      modelAddUnique: null,
      buttonToggle: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },
	methods: {
    openDrawer (bindId: string) {
      void this.$store.dispatch('openDrawer', bindId)
		}
	}
});
</script>
