import * as types from './mutation-types'
export default {
  [types.INCREASE] (state) {
    state.count += 1
  }
}
