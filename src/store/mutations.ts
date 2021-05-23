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

export const APPEND_ITEMS = (state: StateRoot, items: any[]) => {
  state.binItems.push(...items)
}

export const CLEAR_ITEMS = (state: StateRoot) => {
  state.binItems = []
}

export const SET_NEXT_TOKEN = (state: StateRoot, token: string) => {
  state.nextToken = token
}
