import { ActionContext } from 'vuex'
import { BinFilter, StateRoot } from 'src/store/store'
import Vue from 'vue'

type A = ActionContext<StateRoot, StateRoot>

export const openDrawer = (context: A, binId: string) => {
  context.commit('SET_ACTIVE_BIN', binId)
  context.commit('SET_DRAWER', true)
}

export const closeDrawer = (context: A) => {
  context.commit('SET_ACTIVE_BIN', null)
  context.commit('SET_DRAWER', false)
}

export const loadBins = (context: A, filterObj?: BinFilter) => {
  if (filterObj) {
    context.commit('SET_FILTER_OBJ', filterObj)
    context.commit('CLEAR_ITEMS')
  }
  const payload = {
    ...context.state.binFilter,
    token: context.state.nextToken
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  Vue.prototype.$apiManager.post('bin/list', payload).then((resp: any) => {
    context.commit('APPEND_ITEMS', resp.data.data.items)
    context.commit('SET_NEXT_TOKEN', resp.data.data.nextToken)
  }).catch((err: any) => {
    console.log(err)
  })
}
