import { ActionContext } from 'vuex'
import { BinFilter, StateRoot } from 'src/store/store'
import { Notify } from 'quasar'
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
  Vue.prototype.$apiManager.post('bin/list', payload).then((resp: any) => {
    context.commit('APPEND_ITEMS', resp.data.data.items)
    context.commit('SET_NEXT_TOKEN', resp.data.data.nextToken)
  }).catch((err: any) => {
    console.log(err.response.data.error)
    Notify.create({
      progress: true,
      message: JSON.stringify(err.response.data.error).replace(/["\\{}]/g, ' ').trim(),
      color: 'negative',
      timeout: 7000
    })
  })
}

export const deleteBin = (context: A, binId: string) => {
  Vue.prototype.$apiManager.delete(`/bin/delete/${binId}`)
    .then(() => {
      context.commit('DELETE_BIN', binId)
      Notify.create({
        progress: true,
        message: 'Smart bin was deleted successfully.',
        color: 'positive',
        timeout: 3000
      })
      if (context.state.idSearchActive) {
        return context.dispatch('closeIdSearchMode')
      }
    })
    .catch((err: any) => {
      console.log(err.response.data.error)
      Notify.create({
        progress: true,
        message: JSON.stringify(err.response.data.error).replace(/["\\{}]/g, ' ').trim(),
        color: 'negative',
        timeout: 7000
      })
    })
}

export const findBinById = (context: A, binId: string) => {
  Vue.prototype.$apiManager.get(`bin/${binId}`)
    .then((resp: any) => {
      context.commit('CLEAR_ITEMS')
      context.commit('APPEND_ITEMS', [resp.data.data])
      context.commit('SET_NEXT_TOKEN', undefined)
      context.commit('SET_FIND_ID_FLAG', true)
    })
    .catch((err: any) => {
      console.log(err.response.data.error)
      Notify.create({
        progress: true,
        message: 'Smart bin was not found!',
        color: 'negative',
        timeout: 3000
      })
    })
}

export const closeIdSearchMode = (context: A) => {
  context.commit('SET_FIND_ID_FLAG', false)
  context.commit('CLEAR_ITEMS')
  void context.dispatch('loadBins')
}
