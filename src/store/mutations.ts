import { BinFilter, StateRoot } from 'src/store/store'

export const SET_DRAWER = (state: StateRoot, newState: boolean) => {
  state.drawerState = newState
}

export const SET_ACTIVE_BIN = (state: StateRoot, bindId: string) => {
  state.activeBinId = bindId
}

export const SET_FILTER_DIALOG = (state: StateRoot, newState: boolean) => {
  state.filterDialogState = newState
}

export const SET_FILTER_OBJ = (state: StateRoot, obj: BinFilter) => {
  state.binFilter = JSON.parse(JSON.stringify(obj))
}
