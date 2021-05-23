import { GenericOptionItem, StateRoot, TypeBinStatus, TypeGarbage } from 'src/store/store'

export const binStatusItems = (state: StateRoot): GenericOptionItem[] => {
  return state.binStatusValues.map((item: TypeBinStatus) => ({ label: item.toUpperCase(), value: item }))
}

export const binTypeItems = (state: StateRoot): GenericOptionItem[] => {
  return state.binTypeValues.map((item: TypeGarbage) => ({ label: item.toUpperCase(), value: item }))
}
