import * as types from '../constants/types'

const commonGetters = {
  [types.TITLE_TEXT](state) {
    let text = state.maintitle.text;
    return text ? text : "首页";
  },
}

export default commonGetters;