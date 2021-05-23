import { ActionContext } from 'vuex'
import { BinFilter, StateRoot } from 'src/store/store'

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
  }
  console.log('CALL API', context.state.binFilter)
}
