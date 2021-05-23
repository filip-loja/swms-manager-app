import { StateRoot } from 'src/store/store'

export default (): StateRoot => ({
  drawerState: false,
  activeBinId: null,
  binStatusValues: ['disabled', 'enabled'],
  binTypeValues: ['mixed', 'glass', 'metal', 'paper', 'plastic']
})
